export default function ShopCard({card}) {
    return (
        <div className="card">
            <span className="card-name">{card.name}</span>
            <span className="card-color">{card.color}</span>
            <img className="card-img" src={card.img} alt={card.name} />
            <div className="card-line">
                <span className="card-price">${card.price}</span>
                <button className="add-card">ADD TO CARD</button>
            </div>
        </div>
    )
}