import 'kintaro-ui/src/root.css';
import {
  KintaroTitle1, KintaroDescription,
  KintaroButton2, KintaroButton3,
  KintaroModal, KintaroDivider1,
  KintaroDropDown1, KintaroFooter,
  KintaroButton1
} from 'kintaro-ui/src';

import { useState, useEffect, useRef } from 'react';

import { KintaroContentBox1 } from "./KintaroContentBox";
import KintaroComments from "./KintaroComments";

import './App.css'
import './css/kintaroAbout.css';
import './css/kintaroNavbar.css';
import './css/kintaroNavbarProfileMenu.css';
import './css/kintaroBottomMenu.css';
import './css/kintaroHero.css';
import './css/kintaroContentBox1.css'
import './css/KintaroComments.css';

import OvaKidsLogo from '/ovakidslogo.webp';
import Mayushii from '/mayushii.webp';
import SadAnimeGirl from '/anime.webp'
import HeroMascot from '/mascot.webp';
import HeroBg1 from '/hero/001.webp';
import HeroBg2 from '/hero/002.webp';
import HeroBg3 from '/hero/003.webp';

import { FaArrowRight, FaHome, FaFolder, FaInstagram, FaPhone, FaTiktok } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdWavingHand } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showAllProductsModal, setShowAllProductsModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCategoryName, setSelectedCategoryName] = useState('Tüm Kategoriler');
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const profileRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timerId);
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) &&
        profileRef.current && !profileRef.current.contains(event.target)) {
        setIsMenuVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, favoritesRes, categoriesRes] = await Promise.all([
          fetch(`/${BASE_URL}/data/products.json`),
          fetch(`/${BASE_URL}/data/favoriteProducts.json`),
          fetch(`/${BASE_URL}/data/categories.json`)
        ]);

        const [products, favorites, categories] = await Promise.all([
          productsRes.json(),
          favoritesRes.json(),
          categoriesRes.json()
        ]);

        setAllProducts([...products].reverse());
        setFilteredProducts([...products].reverse());
        setFavoriteProducts([...favorites].reverse());
        setCategories(categories);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = [...allProducts];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product =>
        product.category_ids.includes(parseInt(selectedCategory))
      );
    }

    if (debouncedSearchTerm.trim() !== '') {
      const searchLower = debouncedSearchTerm.toLowerCase();
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower)
      );
    }

    setFilteredProducts(filtered);
    setIsSearchActive(debouncedSearchTerm.trim() !== '');
  }, [selectedCategory, debouncedSearchTerm, allProducts]);

  const getCategoryTitles = (category_ids) => {
    return category_ids
      .map(id => categories.find(cat => cat.id === id)?.title)
      .filter(Boolean)
      .join(', ');
  };

  const getCategoryNameById = (id) => {
    return categories.find(cat => cat.id === id)?.title || '';
  };

  const handleOpenAllProducts = (categoryId = null) => {
    if (categoryId) {
      const category = categories.find(cat => cat.id === categoryId);
      if (category) {
        setSelectedCategory(categoryId.toString());
        setSelectedCategoryName(category.title);
      }
    }
    setShowAllProductsModal(true);
    setIsSearchActive(false);
  };

  const handleCloseAllProducts = () => {
    setShowAllProductsModal(false);
    setSelectedCategory('all');
    setSelectedCategoryName('Tüm Kategoriler');
    setSearchTerm('');
    setFilteredProducts(allProducts);
    setIsSearchActive(false);
  };

  const handleCategoryChange = (value) => {
    const categoryName = value === 'all'
      ? 'Tüm Kategoriler'
      : getCategoryNameById(parseInt(value));
    setSelectedCategory(value);
    setSelectedCategoryName(categoryName);
  };

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleSearchSubmit = () => setShowAllProductsModal(true);

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') handleSearchSubmit();
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedCategoryName('Tüm Kategoriler');
  };

  const handleToggleMenu = () => setIsMenuVisible(!isMenuVisible);

  const categoryOptions = [
    { value: 'all', label: 'Tüm Kategoriler' },
    ...categories.map(category => ({
      value: category.id.toString(),
      label: category.title
    }))
  ];

  return (
    <div className="kintaro-container">
      <div className="kintaro-navbar">
        <KintaroTitle1 title={"OvaKids"} />
        <div className="kintaro-navbar-right">
          <div className="kintaro-search-bar" onClick={() => handleOpenAllProducts()}>
            <input
              type="text"
              placeholder="Ürün ara..."
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
            />
            <button className="kintaro-search-button" onClick={handleSearchSubmit}>
              <FiSearch />
            </button>
          </div>
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
              <a href="#home" className="kintaro-profile-item" onClick={() => setIsMenuVisible(false)}>
                <span className="kintaro-profile-icon"><FaHome /></span>
                <span className="kintaro-profile-text">AnaSayfa</span>
              </a>
              <a href="#products"
                className="kintaro-profile-item"
                onClick={() => {
                  setIsMenuVisible(false);
                  handleOpenAllProducts();
                }}
              >
                <span className="kintaro-profile-icon"><FaFolder /></span>
                <span className="kintaro-profile-text">Ürünlerimiz</span>
              </a>
              <a href="#about" className="kintaro-profile-item" onClick={() => setIsMenuVisible(false)}>
                <span className="kintaro-profile-icon"><MdWavingHand /></span>
                <span className="kintaro-profile-text">Hakkımızda</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="kintaro-ui-hero" id='home'>
        <div className="hero-main">
          <KintaroTitle1 title={"🧸 OvaKids'e Hoş Geldin Minik Kahraman!"} textAlign={"center"} />
          <KintaroDescription
            textAlign={"center"}
            text={"Ovakids'in neşeli ve konfor dolu dünyasına adım at! Her yaşa uygun, rengarenk ve yumuşacık kıyafetlerle çocuklar şimdi daha mutlu. Sevgiyle tasarlandı, minik adımlar için özenle hazırlandı!"}
          />
          <div className="kwherobtns">
            {categories.map(cat => (
              <KintaroButton3
                key={cat.id}
                title={cat.title}
                onClick={() => handleOpenAllProducts(cat.id)}
              />
            ))}
          </div>
        </div>
        <img src={HeroMascot} alt="mascot" className="hero-overlay-mascot" />
        <img src={HeroBg1} alt="decorative" className="hero-overlay-mini-image hero1" />
        <img src={HeroBg2} alt="decorative" className="hero-overlay-mini-image hero2" />
        <img src={HeroBg3} alt="decorative" className="hero-overlay-mini-image hero3" />
        <div className="hero-overlay"></div>
        <div className="scroll-down-container">
          <p className="scroll-down-text">Scroll Down</p>
          <div className="scroll-down-arrow">
            <div className="scroll-down-dot"></div>
          </div>
        </div>
      </div>

      <KintaroDivider1 />

      <div className='kintaro-explore'>
        <div className="kintaro-explore-head">
          <KintaroTitle1 title={"En Sevilen Parçalar"} />
          <KintaroDescription text={"Miniklerin en sevdiği parçalar burada! Rahatlık ve şıklığı bir arada sunan favori ürünleri keşfet."} textAlign={"center"} />
        </div>
        <div className="kintaro-content-box-1-container">
          {favoriteProducts.length === 0 ? (
            <p>Yükleniyor...</p>
          ) : (
            favoriteProducts.map(product => (
              <KintaroContentBox1
                key={product.id}
                content={{
                  ...product,
                  categoriesText: getCategoryTitles(product.category_ids),
                  image: product.image.startsWith('http') ? product.image : product.image.replace('base/', `/${BASE_URL}/`)
                }}
              />
            ))
          )}
        </div>
      </div>

      <KintaroDivider1 />

      <div className="kintaro-more-contents-container">
        <div className="special-button-container">
          <img src={Mayushii} alt="Mayushii" className="button-image-mayushii" />
          <button className="special-button" onClick={() => handleOpenAllProducts()}>
            Tüm Ürünleri Gör <FaArrowRight />
          </button>
        </div>
      </div>

      <KintaroModal isOpen={showAllProductsModal} onClose={handleCloseAllProducts} title={"Tüm Ürünler"} width={"100%"}>
        <div style={{ padding: '20px 0', display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <KintaroDropDown1
            options={categoryOptions}
            value={selectedCategory}
            onChange={handleCategoryChange}
            placeholder="Kategori Seçiniz"
          />
          <div className="kintaro-search-bar">
            <input
              type="text"
              placeholder="Ürün ara..."
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
            />
            <button className="kintaro-search-button" onClick={handleSearchSubmit}>
              <FiSearch />
            </button>
          </div>
          {(searchTerm || selectedCategory !== 'all') && (
            <KintaroButton1 title={"Temizle"} onClick={handleClearSearch} />
          )}
        </div>
        <div className="kintaro-content-box-1-container">
          {filteredProducts.length === 0 ? (
            <div style={{ minHeight: "30vh" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--kintaro-gap-sm)",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  width: "100%",
                  left: "0"
                }}
              >
                <img
                  src={SadAnimeGirl}
                  alt="Bulunamadı"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    boxShadow: "var(--kintaro-box-shadow)",
                    objectFit: "cover"
                  }}
                />
                <KintaroDescription text={isSearchActive ? `"${debouncedSearchTerm}" ile ilgili ürün bulunamadı` : "Ürün bulunamadı"} />
              </div>
            </div>
          ) : (
            filteredProducts.map(product => (
              <KintaroContentBox1
                key={product.id}
                content={{
                  ...product,
                  categoriesText: getCategoryTitles(product.category_ids),
                  image: product.image.startsWith('http') ? product.image : product.image.replace('base/', `/${BASE_URL}/`)
                }}
              />
            ))
          )}
        </div>
      </KintaroModal>

      <KintaroDivider1 />

      <div className="kintaro-about" id='about'>
        <div className="kintaro-about-elements">
          <KintaroTitle1 title={"💖 OvaKids Hakkında"} />
          <KintaroDescription
            textAlignMobile={"center"}
            text={"Ovakids, çocuklar ve bebekler için özenle seçilmiş kıyafetler, aksesuarlar ve sevimli ürünleri bir araya getirmek için açılmış küçük ama çok sevgi dolu bir girişimdir. Her ürün, kendi çocuğumuza alacakmışız gibi düşünülerek seçilir. Kaliteli, rahat ve şık parçaları uygun fiyatlarla sunmak önceliğimizdir. Büyük bir marka ya da mağaza değiliz; sadece bu işe gönül vermiş biri olarak, ihtiyacınıza yönelik en tatlı ürünleri bir araya getirmeye çalışıyoruz."}
          />
          <KintaroButton2 title={"Daha Fazlasını Gör"} />
        </div>
        <img src={OvaKidsLogo} alt="ovakids logo" className="kintaro-about-image" />
      </div>

      <KintaroDivider1 />

      <KintaroComments />

      <KintaroDivider1 />

      <div className="kintaro-bottom-menu">
        <a href="#home" className="kintaro-bottom-menu-item">
          <FaHome />
        </a>
        <a href="#products" onClick={() => handleOpenAllProducts()} className="kintaro-bottom-menu-item">
          <FaFolder />
        </a>
        <a href="#about" className="kintaro-bottom-menu-item">
          <MdWavingHand />
        </a>
      </div>

      <KintaroFooter
        title="Ovakids"
        description="Hizmetlerimiz, ve bizim hakkında daha fazla bilgi edinin."
        copyrightText="© 2025 Ovakids Tüm Hakları Saklıdır."
        sections={[
          {
            title: "Services",
            links: [
              { text: "Web Development", url: "#" },
              { text: "Mobile Applications", url: "#" },
              { text: "UI/UX Design", url: "#" },
              { text: "Cloud Hosting", url: "#" }
            ]
          },
          {
            title: "Resources",
            links: [
              { text: "Documentation", url: "#" },
              { text: "API Reference", url: "#" },
              { text: "Developer Tools", url: "#" },
              { text: "Code Samples", url: "#" }
            ]
          },
          {
            title: "Company",
            links: [
              { text: "About Us", url: "#" },
              { text: "Careers", url: "#" },
              { text: "Press & Media", url: "#" },
              { text: "Partners", url: "#" }
            ]
          },
          {
            title: "Support",
            links: [
              { text: "Help Center", url: "#" },
              { text: "Community Forum", url: "#" },
              { text: "Status Page", url: "#" },
              { text: "Contact Support", url: "#" }
            ]
          }
        ]}
        socialIcons={[
          { icon: <FaInstagram />, url: "#" },
          { icon: <FaTiktok />, url: "#" },
          { icon: <FaPhone />, url: "#" },
          { icon: <IoIosMail />, url: "#" },
        ]}
      />
    </div>
  )
}

export default App