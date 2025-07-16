import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaFolder, FaPhone, FaEllipsisH } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";

import './kintaroBottommenu.css';
import routes from '../routes.json';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function KintaroBottomMenu() {
    const location = useLocation();
    const [showMoreMenu, setShowMoreMenu] = useState(false);
    const moreButtonRef = useRef(null);
    const menuRef = useRef(null);

    // Sabit ikonlar (sıralamaya göre eşleşiyor)
    const staticIcons = [<FaHome />, <MdWavingHand />, <FaFolder />, <FaPhone />];

    const menuItems = routes.map((item, index) => ({
        path: `/${BASE_URL}/${item.url}`,
        icon: staticIcons[index] || null,
        text: item.title
    }));

    const visibleItems = menuItems.slice(0, 3);
    const moreItems = menuItems.slice(3);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !moreButtonRef.current.contains(event.target)) {
                setShowMoreMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    return (
        <div className="kintaro-bottom-menu">
            {visibleItems.map((item, i) => (
                <Link
                    key={i}
                    to={item.path}
                    className={`kintaro-bottom-menu-item ${location.pathname === item.path ? 'active' : ''}`}
                >
                    {item.icon}
                </Link>
            ))}

            {moreItems.length > 0 && (
                <button
                    ref={moreButtonRef}
                    className={`kintaro-bottom-menu-item kintaro-bottom-more-button ${showMoreMenu ? 'active' : ''}`}
                    onClick={() => setShowMoreMenu(!showMoreMenu)}
                >
                    <FaEllipsisH className='kintaro-bottom-menu-icon' />
                </button>
            )}

            <div
                className={`kintaro-bottom-more-menu ${showMoreMenu ? 'visible' : ''}`}
                ref={menuRef}
            >
                {moreItems.map((item, i) => (
                    <Link
                        key={i}
                        to={item.path}
                        className="kintaro-bottom-more-item"
                        onClick={() => setShowMoreMenu(false)}
                    >
                        {item.icon && <span className='kintaro-bottom-more-icon'>{item.icon}</span>}
                        <span className="kintaro-bottom-more-text">{item.text}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default KintaroBottomMenu;
