import React from 'react'

const BASE_URL = import.meta.env.VITE_BASE_URL;

function KintaroNotFound() {
    return (
        <div className='kintaro-xahzy'>
            <img src={`/${BASE_URL}/404-icon.png`} alt="Not Found" className="kintaro-plmvu" />
            <p className="kintaro-qwert">Oops! Görünüşe göre aradığınız içerik artık burada değil. Silinmiş, taşınmış ya da yapım aşamasında olabilir.</p>
            <i className="kintaro-bnzkt">-404 Not found-</i>
        </div>
    )
}

export default KintaroNotFound
