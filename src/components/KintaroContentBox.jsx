import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import './kintaroContentBox1.css'

const KintaroContentBox1 = ({ content }) => {
    return (
        <Link key={content.id} className="kintaro-content-box-1" to={content.redirectLink}>

            <img
                src={content.image}
                alt={content.title}
                className="kintaro-content-box-1-image"
            />

            <div className="kintaro-content-box-1-elements">
                <p className="kintaro-content-box-1-title">{content.title}</p>
                <div className="kintaro-price">
                    <p className="kintaro-price-text">
                        {content.price}
                        <span className="kintaro-price-text-unit"> TL</span>
                    </p>
                </div>
            </div>

        </Link>
    );
};



export { KintaroContentBox1 };