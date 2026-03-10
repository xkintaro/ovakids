import { useRef, useEffect, useState } from 'react';

import {
    KintaroTitle1,
    KintaroDescription
} from 'kintaro-ui/src';

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


const BASE_URL = import.meta.env.VITE_BASE_URL;

const KintaroComments = () => {
    const [comments, setComments] = useState([]);
    const carouselRef = useRef(null);

    useEffect(() => {
        fetch(`/${BASE_URL}/data/comments.json`)
            .then((res) => res.json())
            .then((data) => setComments(data))
            .catch((err) => console.error("Yorum verisi yüklenemedi:", err));
    }, []);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className='kintaro-comments'>
            <div className="kintaro-comments-head">
                <KintaroTitle1 title={"💬 Müşteri Yorumlarımız"} />
                <KintaroDescription
                    text={"Değerli müşterilerimizin deneyimlerini burada paylaşıyoruz."}
                    textAlign={"center"}
                />
            </div>

            <div className="kintaro-comments-container">
                <button className="carousel-arrow left" onClick={scrollLeft}>
                    <FaAngleLeft />
                </button>
                <div className="kintaro-comments-carousel" ref={carouselRef}>
                    {comments.map((comment) => (
                        <div key={comment.id} className="kintaro-comment-box">
                            <div className="comment-header">
                                <img src={comment.avatar} alt={comment.name} className="comment-avatar" />
                                <div className="comment-user-info">
                                    <span className="comment-name">{comment.name}</span>
                                    <div className="comment-rating">
                                        {[...Array(5)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={`rating-star ${i < comment.rating ? 'filled' : ''}`}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="comment-text">{comment.comment}</p>
                            <span className="comment-date">{comment.date}</span>
                        </div>
                    ))}
                </div>
                <button className="carousel-arrow right" onClick={scrollRight}>
                    <FaAngleRight />
                </button>
            </div>
        </div>
    );
};

export default KintaroComments;
