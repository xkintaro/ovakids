import React, { useRef, useState, useEffect } from 'react';

import {
  KintaroTitle1, KintaroTitle2, KintaroTitle3,
  KintaroTextBox1, KintaroTextBox2, KintaroTextBox3,
  KintaroButton1, KintaroButton2, KintaroButton3, KintaroButton4,
  KintaroButtonClose, KintaroCheckBox,
  KintaroDescription, KintaroModal, KintaroFooter,
  KintaroDivider1, KintaroAudioPlayer
} from 'kintaro-ui/src';

import Hero from '../components/KintaroHero'

import { KintaroContentBox1 } from "../components/KintaroContentBox";
import KintaroComments from "../components/KintaroComments";

import Logo from '/ovakidslogo.png'
import Mayushii from '/mayushii.png'

import { FaArrowRight } from "react-icons/fa";
const BASE_URL = import.meta.env.VITE_BASE_URL;


function KintaroHome() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`/${BASE_URL}/data/products.json`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("products.json yüklenemedi:", err));

    fetch(`/${BASE_URL}/data/categories.json`)
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("categories.json yüklenemedi:", err));
  }, []);

  const getCategoryTitles = (category_ids) => {
    return category_ids
      .map(id => categories.find(cat => cat.id === id)?.title)
      .filter(Boolean)
      .join(', ');
  };

  return (
    <div>
      <Hero />
      <KintaroDivider1 />

      <div className='kintaro-explore'>

        <div className="kintaro-explore-head">
          <KintaroTitle1 title={"En Sevilen Parçalar"} />
          <KintaroDescription text={"Miniklerin en sevdiği parçalar burada! Rahatlık ve şıklığı bir arada sunan favori ürünleri keşfet."} textAlign={"center"} />
        </div>

        <div className="kintaro-content-box-1-container">
          {products.length === 0 ? (
            <p>Yükleniyor...</p>
          ) : (
            products.map(product => (
              <KintaroContentBox1
                key={product.id}
                content={{
                  ...product,
                  // İstersen açıklamayı kısaltabilir ya da kategori isimlerini ekleyebilirsin
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
          <a href={`/${BASE_URL}/products`} className="special-button">Tüm Ürünleri Gör <FaArrowRight /> </a>
        </div>
      </div>

      <KintaroDivider1 />

      <div className="kintaro-about">

        <div className="kintaro-about-elements">
          <KintaroTitle1 title={"💖 OvaKids Hakkında"} />
          <KintaroDescription
            textAlignMobile={"center"}
            text={"Ovakids, çocuklar ve bebekler için özenle seçilmiş kıyafetler, aksesuarlar ve sevimli ürünleri bir araya getirmek için açılmış küçük ama çok sevgi dolu bir girişimdir. Her ürün, kendi çocuğumuza alacakmışız gibi düşünülerek seçilir. Kaliteli, rahat ve şık parçaları uygun fiyatlarla sunmak önceliğimizdir. Büyük bir marka ya da mağaza değiliz; sadece bu işe gönül vermiş biri olarak, ihtiyacınıza yönelik en tatlı ürünleri bir araya getirmeye çalışıyoruz."}
          />
          <KintaroButton2 title={"Daha Fazlasını Gör"} />
        </div>

        <img src={Logo} alt="ovakids logo" className="kintaro-about-image" />

      </div>
      <KintaroDivider1 />
      <KintaroComments />

      <KintaroDivider1 />

    </div>
  )
}

export default KintaroHome