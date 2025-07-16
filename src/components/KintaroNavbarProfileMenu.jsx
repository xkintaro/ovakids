import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaFolder } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";

import './kintaroNavbarProfileMenu.css';
import routes from '../routes.json';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function KintaroNavbarProfileMenu() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const profileRef = useRef(null);
    const menuRef = useRef(null);

    const handleToggleMenu = () => setIsMenuVisible(!isMenuVisible);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !profileRef.current.contains(event.target)
            ) {
                setIsMenuVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    // Sabit ikonlar: sıralamaya göre routes.json’dakiyle eşleşir
    const staticIcons = [<FaUser />, <MdWavingHand />, <FaFolder />];

    // İlk 3 menü öğesini al (navbar için 3 yeterli)
    const menuItems = routes.slice(0, 3).map((item, index) => ({
        path: `/${BASE_URL}/${item.url}`,
        icon: staticIcons[index] || null,
        text: item.title
    }));

    return (
        <div className="kintaro-profile" ref={profileRef}>
            <FaUser
                className="kintaro-profile-button"
                onClick={handleToggleMenu}
                role="button"
            />
            <div
                className={`kintaro-profile-menu ${isMenuVisible ? 'visible' : ''}`}
                ref={menuRef}
                role="menu"
                aria-hidden={!isMenuVisible}
            >
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className="kintaro-profile-item"
                        onClick={() => setIsMenuVisible(false)}
                    >
                        {item.icon && <span className="kintaro-profile-icon">{item.icon}</span>}
                        <span className="kintaro-profile-text">{item.text}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default KintaroNavbarProfileMenu;
