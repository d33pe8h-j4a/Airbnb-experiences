function Card(props) {
    const {
        coverImg,
        stats: { rating, reviewCount },
        location,
        title,
        price,
        openSpots,
    } = props;
    let badgeText;
    if (openSpots === 0) badgeText = "SOLD OUT";
    else if (location === "Online") badgeText = "ONLINE";
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img
                src={`../images/${coverImg}`}
                alt="Card image"
                className="card-img"
            />
            <div className="card-stats">
                <img
                    src="../images/star.png"
                    alt="star"
                    className="card-star"
                />
                <span>{rating}</span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">{location}</span>
            </div>
            <h2 className="card-title">{title}</h2>
            <p className="card-price">
                <span className="bold">From ${price}</span> / person
            </p>
        </div>
    );
}

export default Card;
