import React, { useRef } from 'react';
import './KintaroComments.css';
import {
    KintaroTitle1,
    KintaroDescription
} from 'kintaro-ui/src';

const KintaroComments = () => {
    const comments = [
        {
            id: 1,
            name: "Ayşe K.",
            avatar: "https://i.pravatar.cc/150?img=5",
            comment: "Ürünleriniz çok kaliteli, kızım çok sevdi!",
            rating: 5,
            date: "2 gün önce"
        },
        {
            id: 2,
            name: "Mehmet B.",
            avatar: "https://i.pravatar.cc/150?img=12",
            comment: "Hızlı kargo ve mükemmel paketleme. Teşekkürler!",
            rating: 4,
            date: "1 hafta önce"
        },
        {
            id: 3,
            name: "Zeynep T.",
            avatar: "https://i.pravatar.cc/150?img=32",
            comment: "Renkler fotoğraflardaki gibi çıktı, çok memnun kaldık.",
            rating: 5,
            date: "3 hafta önce"
        },
        {
            id: 4,
            name: "Can D.",
            avatar: "https://i.pravatar.cc/150?img=15",
            comment: "Fiyat/performans oranı mükemmel, tekrar alacağım.",
            rating: 5,
            date: "1 ay önce"
        },
        {
            id: 5,
            name: "Elif S.",
            avatar: "https://i.pravatar.cc/150?img=47",
            comment: "Kumaş kalitesi çok iyi, öneririm.",
            rating: 4,
            date: "2 ay önce"
        },
        {
            id: 6,
            name: "Burak A.",
            avatar: "https://i.pravatar.cc/150?img=29",
            comment: "Tam bedenime göre oldu, tam puan!",
            rating: 5,
            date: "5 gün önce"
        },
        {
            id: 7,
            name: "Fatma Y.",
            avatar: "https://i.pravatar.cc/150?img=39",
            comment: "Siparişim eksiksiz geldi. Çok teşekkür ederim.",
            rating: 4,
            date: "1 hafta önce"
        },
        {
            id: 8,
            name: "Kerem K.",
            avatar: "https://i.pravatar.cc/150?img=20",
            comment: "İlk alışverişimdi, çok memnun kaldım.",
            rating: 5,
            date: "3 gün önce"
        },
        {
            id: 9,
            name: "Nazan R.",
            avatar: "https://i.pravatar.cc/150?img=26",
            comment: "Ürün açıklamasıyla birebir aynı geldi.",
            rating: 4,
            date: "2 hafta önce"
        },
        {
            id: 10,
            name: "Tolga Z.",
            avatar: "https://i.pravatar.cc/150?img=8",
            comment: "Kargo biraz gecikti ama ürün çok iyiydi.",
            rating: 3,
            date: "1 ay önce"
        },
        {
            id: 11,
            name: "Selin E.",
            avatar: "https://i.pravatar.cc/150?img=17",
            comment: "Çocuklarım bayıldı! Renkler çok canlı.",
            rating: 5,
            date: "6 gün önce"
        },
        {
            id: 12,
            name: "Emre U.",
            avatar: "https://i.pravatar.cc/150?img=11",
            comment: "Kalıplar biraz dar, bir beden büyük alın.",
            rating: 3,
            date: "4 hafta önce"
        },
        {
            id: 13,
            name: "Merve O.",
            avatar: "https://i.pravatar.cc/150?img=35",
            comment: "Paketleme çok özenliydi. Tavsiye ederim.",
            rating: 5,
            date: "1 hafta önce"
        },
        {
            id: 14,
            name: "Ahmet N.",
            avatar: "https://i.pravatar.cc/150?img=22",
            comment: "Kaliteli kumaş ve güzel dikiş. Harika!",
            rating: 4,
            date: "2 gün önce"
        },
        {
            id: 15,
            name: "Seda L.",
            avatar: "https://i.pravatar.cc/150?img=6",
            comment: "Beklediğimden daha güzel geldi, teşekkürler.",
            rating: 5,
            date: "3 hafta önce"
        },
        {
            id: 16,
            name: "Cemile M.",
            avatar: "https://i.pravatar.cc/150?img=19",
            comment: "İade süreci çok kolaydı, memnun kaldım.",
            rating: 4,
            date: "2 ay önce"
        },
        {
            id: 17,
            name: "Yusuf T.",
            avatar: "https://i.pravatar.cc/150?img=44",
            comment: "Bu fiyata bu kalite şaşırttı!",
            rating: 5,
            date: "1 ay önce"
        },
        {
            id: 18,
            name: "Aslı P.",
            avatar: "https://i.pravatar.cc/150?img=25",
            comment: "Siparişim sorunsuz bir şekilde elime ulaştı.",
            rating: 5,
            date: "2 hafta önce"
        },
        {
            id: 19,
            name: "Ferhat Ç.",
            avatar: "https://i.pravatar.cc/150?img=48",
            comment: "Kumaşı yumuşak ve rahat. Herkese öneririm.",
            rating: 4,
            date: "3 gün önce"
        },
        {
            id: 20,
            name: "Nazlı D.",
            avatar: "https://i.pravatar.cc/150?img=38",
            comment: "Kızım için aldım, çok beğendi. Teşekkürler!",
            rating: 5,
            date: "1 gün önce"
        }
    ];


    const carouselRef = useRef(null);

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
                    &lt;
                </button>
                <div className="kintaro-comments-carousel" ref={carouselRef}>
                    {comments.map((comment, index) => (
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
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default KintaroComments;