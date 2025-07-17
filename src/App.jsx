
import 'kintaro-ui/src/root.css';

import {
  KintaroTitle1, KintaroTitle2, KintaroTitle3,
  KintaroTextBox1, KintaroTextBox2, KintaroTextBox3,
  KintaroButton1, KintaroButton2, KintaroButton3, KintaroButton4,
  KintaroButtonClose, KintaroCheckBox,
  KintaroDescription, KintaroModal, KintaroFooter,
  KintaroDivider1, KintaroAudioPlayer
} from 'kintaro-ui/src';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { FaInstagram, FaPhone, FaTiktok } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import './App.css'

import Navbar from './components/KintaroNavbar'
import BottomMenu from './components/KintaroBottomMenu'

import NotFoundPage from './pages/KintaroNotFound'
import UnderConstructionPage from './pages/KintarouUnderConstruction'
import Home from './pages/KintaroHome'
import About from './pages/KintaroAbout'

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // istersen "auto" da olabilir
    });
  }, [pathname]);

  return null;
};

function App() {

  return (
    <Router>

      <ScrollToTop />

      <Navbar />
      <BottomMenu />

      <div className="kintaro-container">

        <Routes>
          <Route path={`/${BASE_URL}/`} element={<Home />} />
          <Route path={`/${BASE_URL}/home`} element={<Home />} />
          <Route path={`/${BASE_URL}/about`} element={<About />} />
          <Route path={`/${BASE_URL}/under-construction`} element={<UnderConstructionPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>



        <KintaroFooter
          title="Ovakids"
          description="Hizmetlerimiz, ve bizim hakkında daha fazla bilgi edinin."
          copyrightText="© 2025 Ovakids Tüm Hakları Saklıdır."
          sections={[
            {
              title: "Services",
              links: [
                { text: "Web Development", url: "" },
                { text: "Mobile Applications", url: "" },
                { text: "UI/UX Design", url: "" },
                { text: "Cloud Hosting", url: "" }
              ]
            },
            {
              title: "Resources",
              links: [
                { text: "Documentation", url: "" },
                { text: "API Reference", url: "" },
                { text: "Developer Tools", url: "" },
                { text: "Code Samples", url: "" }
              ]
            },
            {
              title: "Company",
              links: [
                { text: "About Us", url: "" },
                { text: "Careers", url: "" },
                { text: "Press & Media", url: "" },
                { text: "Partners", url: "" }
              ]
            },
            {
              title: "Support",
              links: [
                { text: "Help Center", url: "" },
                { text: "Community Forum", url: "" },
                { text: "Status Page", url: "" },
                { text: "Contact Support", url: "" }
              ]
            }
          ]}
          socialIcons={[
            { icon: <FaInstagram />, url: "https://www.instagram.com/ovakids1/" },
            { icon: <FaTiktok />, url: "https://tiktok.com" },
            { icon: <FaPhone />, url: "tel:+905519625760" },
            { icon: <IoIosMail />, url: "mailto:contact@example.com" },
          ]}
        />

      </div>

    </Router>
  )
}

export default App
