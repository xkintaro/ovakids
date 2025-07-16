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

import Logo from '/ovakidslogo.png'
import Search from './KintaroNavbarSearch'
import ProfileMenu from './KintaroNavbarProfileMenu'
import './kintaroNavbar.css'

import routes from '../routes.json'; // <-- JSON içe aktarıldı

const BASE_URL = import.meta.env.VITE_BASE_URL;

function KintaroNavbar() {
    const location = useLocation();

    return (
        <div className="kintaro-navbar">
            <Link to="/" title='Anasayfa'>
                <KintaroTitle1 title={"OvaKids"} />
            </Link>

            <div className="kintaro-navbar-links">
                {routes.map((route, index) => (
                    <Link
                        key={index}
                        to={`/${BASE_URL}/${route.url}`}
                        className={`kintaro-navbar-links-item ${location.pathname === `/${BASE_URL}/${route.url}` ||
                            (route.url === 'home' && location.pathname === '/')
                            ? 'active-link' : ''
                            }`}
                    >
                        {route.title}
                    </Link>
                ))}
            </div>

            <div className="kintaro-navbar-right">
                <Search />
                <ProfileMenu />
            </div>
        </div>
    );
}

export default KintaroNavbar;
