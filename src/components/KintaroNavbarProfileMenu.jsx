import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaFolder, FaPhone } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";

import './kintaroNavbarProfileMenu.css';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function KintaroNavbarProfileMenu() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [routes, setRoutes] = useState([]);
    const profileRef = useRef(null);
    const menuRef = useRef(null);

    const handleToggleMenu = () => setIsMenuVisible(!isMenuVisible);

    useEffect(() => {
        // routes.json dosyasını fetch ile al
        fetch(`/${BASE_URL}/routes.json`)
            .then((res) => {
                if (!res.ok) throw new Error("routes.json yüklenemedi.");
                return res.json();
            })
            .then((data) => setRoutes(data))
            .catch((err) => console.error("Hata:", err));
    }, []);

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

    const staticIcons = [<FaHome />, <MdWavingHand />, <FaFolder />, <FaPhone />];

    const menuItems = routes.map((item, index) => ({
        path: `/${BASE_URL}/${item.url}`,
        icon: staticIcons[index] || null,
        text: item.title
    }));

    return (
        <div className="kintaro-profile" ref={profileRef}>
            <FaHome
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
