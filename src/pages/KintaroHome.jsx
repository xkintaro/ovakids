import React, { useRef } from 'react';

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

  const contentsRef = useRef(null);

  const contents = [
    {
      id: 1,
      image: `/${BASE_URL}/clothes/001.png`,
      title: "Tatlı Ayıcıklı Çocuk Kıyafeti",
      price: 400,
      redirectLink: `/${BASE_URL}/content-page`
    },
    {
      id: 2,
      image: `/${BASE_URL}/clothes/002.png`,
      title: "Dinazorlu Çocuk Kıyafeti",
      price: 300,
      redirectLink: `/${BASE_URL}/content-page`
    },
    {
      id: 3,
      image: `/${BASE_URL}/clothes/003.png`,
      title: "Renkli Arabalı Çocuk Kıyafeti",
      price: 280,
      redirectLink: `/${BASE_URL}/content-page`
    },
    {
      id: 4,
      image: `/${BASE_URL}/clothes/004.png`,
      title: "Bebek Filli Çocuk Kıyafeti",
      price: 360,
      redirectLink: `/${BASE_URL}/content-page`
    },
    {
      id: 5,
      image: `/${BASE_URL}/clothes/005.png`,
      title: "Sevimli Bereli Çocuk Kıyafeti",
      price: 410,
      redirectLink: `/${BASE_URL}/content-page`
    },
    {
      id: 6,
      image: `/${BASE_URL}/clothes/006.png`,
      title: "Ayıkıcılı Rahat Çocuk Kıyafeti",
      price: 270,
      redirectLink: `/${BASE_URL}/content-page`
    },
    {
      id: 7,
      image: `/${BASE_URL}/clothes/007.png`,
      title: "Tatlı Bebek Kıyafeti",
      price: 200,
      redirectLink: `/${BASE_URL}/content-page`
    }
  ];

  return (
    <div>
      <Hero />
      <KintaroDivider1 />

      <div className='kintaro-explore'>

        <div className="kintaro-explore-head">
          <KintaroTitle1 title={"En Sevilen Parçalar"} />
          <KintaroDescription text={"Miniklerin en sevdiği parçalar burada! Rahatlık ve şıklığı bir arada sunan favori ürünleri keşfet."} textAlign={"center"} />
        </div>

        <div className="kintaro-content-box-1-container" ref={contentsRef}>

          {contents.length === 0 ? (

            <KintaroDescription text={"Keşfedilecek içerik yok."} maxLength={"999"} showToggleButton={false} />

          ) : (

            contents.map((content) => (

              <KintaroContentBox1 key={content.id} content={content} />

            ))
          )}

        </div>
      </div>

      <KintaroDivider1 />

      <div className="kintaro-more-contents-container">
        <div className="special-button-container">
          <img src={Mayushii} alt="Mayushii" className="button-image-mayushii" />
          <a href="" className="special-button">Tüm Ürünleri Gör <FaArrowRight /> </a>
        </div>
      </div>

      <KintaroDivider1 />

      <div className="kintaro-about">

        <div className="kintaro-about-elements">
          <KintaroTitle1 title={"💖 OvaKids Hakkında"} />
          <KintaroDescription
            textAlignMobile={"center"}
            text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
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