
const KintaroContentBox1 = ({ content }) => {
    return (
        <div key={content.id} className="kintaro-content-box-1" >

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

        </div>
    );
};



export { KintaroContentBox1 };