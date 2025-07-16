import {
  KintaroTitle1, KintaroTitle2, KintaroTitle3,
  KintaroTextBox1, KintaroTextBox2, KintaroTextBox3,
  KintaroButton1, KintaroButton2, KintaroButton3, KintaroButton4,
  KintaroButtonClose, KintaroCheckBox,
  KintaroDescription, KintaroModal, KintaroFooter,
  KintaroDivider1, KintaroAudioPlayer
} from 'kintaro-ui/src';
import 'kintaro-ui/src/root.css';

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './App.css'

import Navbar from './components/KintaroNavbar'
import BottomMenu from './components/KintaroBottomMenu'

import NotFoundPage from './pages/KintaroNotFound'
import UnderConstructionPage from './pages/KintarouUnderConstruction'
import Home from './pages/KintaroHome'

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
          <Route path={`/${BASE_URL}/home`} element={<Home />} />
          <Route path={`/${BASE_URL}/under-construction`} element={<UnderConstructionPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>



        <div className="scroll-down-container">
          <p className="scroll-down-text">Scroll Down</p>
          <div className="scroll-down-arrow">
            <div className="scroll-down-dot"></div>
          </div>
        </div>
      </div>

    </Router>
  )
}
{/*`/${BASE_URL}/`*/ }
export default App
