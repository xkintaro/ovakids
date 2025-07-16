import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    KintaroTitle1, KintaroTitle2, KintaroTitle3,
    KintaroTextBox1, KintaroTextBox2, KintaroTextBox3,
    KintaroButton1, KintaroButton2, KintaroButton3, KintaroButton4,
    KintaroButtonClose, KintaroCheckBox,
    KintaroDescription, KintaroModal, KintaroFooter,
    KintaroDivider1, KintaroAudioPlayer
} from 'kintaro-ui/src';

import Search from './KintaroNavbarSearch'
import ProfileMenu from './KintaroNavbarProfileMenu'
import './kintaroNavbar.css'

function KintaroNavbar() {

    const location = useLocation();

    return (
        <div className="kintaro-navbar">

            <Link to="/" title='Anasayfa'>
                <KintaroTitle1 title={"title"} />
            </Link>

            <div className="kintaro-navbar-links">

                <Link
                    to="/home"
                    className={`kintaro-navbar-links-item ${location.pathname === '/home' || location.pathname === '/' ? 'active-link' : ''
                        }`}
                >
                    Home
                </Link>

                <Link to="/explore" className={`kintaro-navbar-links-item ${location.pathname === '/explore' ? 'active-link' : ''}`}>
                    Explore
                </Link>

                <Link to="/about" className={`kintaro-navbar-links-item ${location.pathname === '/about' ? 'active-link' : ''}`}>
                    About
                </Link>

                <Link to="/settings" className={`kintaro-navbar-links-item ${location.pathname === '/settings' ? 'active-link' : ''}`}>
                    Settings
                </Link>

            </div>

            <div className="kintaro-navbar-right">

                <Search />
                <ProfileMenu />

            </div>

        </div>
    );
}

export default KintaroNavbar;