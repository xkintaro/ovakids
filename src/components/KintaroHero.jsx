import {
    KintaroTitle1, KintaroDescription, KintaroButton3
} from 'kintaro-ui/src';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import mascot from '/mascot.png';
import hero1 from '/hero/001.png';
import hero2 from '/hero/002.png';
import hero3 from '/hero/003.png';

import './kintaroHero.css';
const BASE_URL = import.meta.env.VITE_BASE_URL;
function KintaroHero() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/${BASE_URL}/data/categories.json`)
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error("Kategori verileri alınamadı", err));
    }, []);

    const handleCategoryClick = (categoryId) => {
        navigate(`/${BASE_URL}/products?category_id=${categoryId}`);
    };

    return (
        <div className="kintaro-ui-hero">
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
                            onClick={() => handleCategoryClick(cat.id)}
                        />
                    ))}
                </div>
            </div>

            {/* Maskot ve dekoratif resimler */}
            <img src={mascot} alt="mascot" className="hero-overlay-mascot" />
            <img src={hero1} alt="decorative" className="hero-overlay-mini-image hero1" />
            <img src={hero2} alt="decorative" className="hero-overlay-mini-image hero2" />
            <img src={hero3} alt="decorative" className="hero-overlay-mini-image hero3" />

            {/* Arka plan efekti */}
            <div className="hero-overlay"></div>

            <div className="scroll-down-container">
                <p className="scroll-down-text">Scroll Down</p>
                <div className="scroll-down-arrow">
                    <div className="scroll-down-dot"></div>
                </div>
            </div>
        </div>
    );
}

export default KintaroHero;
