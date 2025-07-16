import React from 'react'

import {
  KintaroTitle1, KintaroTitle2, KintaroTitle3,
  KintaroTextBox1, KintaroTextBox2, KintaroTextBox3,
  KintaroButton1, KintaroButton2, KintaroButton3, KintaroButton4,
  KintaroButtonClose, KintaroCheckBox,
  KintaroDescription, KintaroModal, KintaroFooter,
  KintaroDivider1, KintaroAudioPlayer
} from 'kintaro-ui/src';

import overlay from '/2.png'
import mascot from '/mascot.png'
import hero1 from '/hero/001.png'
import hero2 from '/hero/002.png'
import hero3 from '/hero/003.png'

function KintaroHome() {
  return (
    <div className="kintaro-ui-hero">
      <div className="hero-main">
        <KintaroTitle1 title={"🧸 OvaKids'e Hoş Geldin Minik Kahraman!"} textAlign={"center"} />
        <KintaroDescription
          textAlign={"center"}
          text={"Ovakids'in neşeli ve konfor dolu dünyasına adım at! Her yaşa uygun, rengarenk ve yumuşacık kıyafetlerle çocuklar şimdi daha mutlu. Sevgiyle tasarlandı, minik adımlar için özenle hazırlandı!"}
        />
        <div className="kwherobtns">
          <KintaroButton3 title={"Erkek Çocuk"} />
          <KintaroButton3 title={"Kız Çocuk"} />
          <KintaroButton3 title={"Erkek Bebek"} />
          <KintaroButton3 title={"Kız Çocuk"} />
          <KintaroButton3 title={"Çocuk Takım"} />
          <KintaroButton3 title={"Bayan Çanta"} />
          <KintaroButton3 title={"Aksesuar"} />
        </div>
      </div>

      <img src={mascot} alt="mascot" className="hero-overlay-mascot" />

      {/* Mini Images */}
      <img src={hero1} alt="decorative" className="hero-overlay-mini-image hero1" />
      <img src={hero2} alt="decorative" className="hero-overlay-mini-image hero2" />
      <img src={hero3} alt="decorative" className="hero-overlay-mini-image hero3" />

      {/* Background Overlay */}
      <div className="hero-overlay"></div>

      <div className="scroll-down-container">
        <p className="scroll-down-text">Scroll Down</p>
        <div className="scroll-down-arrow">
          <div className="scroll-down-dot"></div>
        </div>
      </div>

    </div>
  )
}

export default KintaroHome