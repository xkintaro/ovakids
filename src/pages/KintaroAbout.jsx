import React from 'react'
import {
  KintaroTitle1, KintaroTitle2, KintaroTitle3,
  KintaroTextBox1, KintaroTextBox2, KintaroTextBox3,
  KintaroButton1, KintaroButton2, KintaroButton3, KintaroButton4,
  KintaroButtonClose, KintaroCheckBox,
  KintaroDescription, KintaroModal, KintaroFooter,
  KintaroDivider1, KintaroAudioPlayer
} from 'kintaro-ui/src';

import Logo from '/ovakidslogo.png'

function KintaroAbout() {
  return (
    <div className="kintaro-about">

      <div className="kintaro-about-elements">
        <KintaroTitle1 title={"💖 OvaKids Hakkında"} />
        <KintaroDescription
          textAlignMobile={"center"}
          text={"Ovakids, çocuklar ve bebekler için özenle seçilmiş kıyafetler, aksesuarlar ve sevimli ürünleri bir araya getirmek için açılmış küçük ama çok sevgi dolu bir girişimdir. Her ürün, kendi çocuğumuza alacakmışız gibi düşünülerek seçilir. Kaliteli, rahat ve şık parçaları uygun fiyatlarla sunmak önceliğimizdir. Büyük bir marka ya da mağaza değiliz; sadece bu işe gönül vermiş biri olarak, ihtiyacınıza yönelik en tatlı ürünleri bir araya getirmeye çalışıyoruz. Bebeklerin ve çocukların hassas cildine uygun kumaşlar, eğlenceli desenler ve kullanışlı detaylar bizim için çok önemli. Her siparişi özenle hazırlar, sorularınızı içtenlikle yanıtlarız. Sizlerden gelen geri bildirimler bizim için çok kıymetli. Kısacası, Ovakids bir anne/baba dostu, samimi bir alışveriş köşesi... İlginiz ve desteğiniz için teşekkür ederiz! 💛"}
        />
      </div>

      <img src={Logo} alt="ovakids logo" className="kintaro-about-image" />

    </div>
  )
}

export default KintaroAbout