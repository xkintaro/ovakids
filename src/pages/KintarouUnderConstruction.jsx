import React from 'react'

const BASE_URL = import.meta.env.VITE_BASE_URL;

function KintarouUnderConstruction() {
    return (
        <div className='kintaro-xahzy'>
            <img src={`/${BASE_URL}/under-construction-icon.png`} alt="Under Construction" className="kintaro-plmvu" />
            <p className="kintaro-qwert">Oops! Görünüşe göre aradığınız içerik şuanda yapım aşamasında.</p>
            <i className="kintaro-bnzkt">-Under Construction-</i>
        </div>
    )
}

export default KintarouUnderConstruction
