import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import './kintaroNavbarProfileMenu.css'
function KintaroNavbarProfileMenu() {

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const profileRef = useRef(null);
    const menuRef = useRef(null);

    const handleToggleMenu = () => setIsMenuVisible(!isMenuVisible);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !profileRef.current.contains(event.target)) {
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
                <Link to="/" className="kintaro-profile-item" onClick={() => setIsMenuVisible(false)}>
                    <FaUser />
                    Undefined
                </Link>
                <Link to="/" className="kintaro-profile-item" onClick={() => setIsMenuVisible(false)}>
                    <FaUser />
                      Undefined
                </Link>
                <Link to="/" className="kintaro-profile-item" onClick={() => setIsMenuVisible(false)}>
                    <FaUser />
                      Undefined
                </Link>
            </div>
        </div>
    );
}

export default KintaroNavbarProfileMenu;