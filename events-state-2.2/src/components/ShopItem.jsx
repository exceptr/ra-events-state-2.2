export default function ShopItem({item}) {
    return (
        <div className="item">
            <img className="item-img" src={item.img} alt={item.name} />
            <span className="item-name">{item.name}</span>
            <span className="item-color">{item.color}</span>
            <span className="item-price">${item.price}</span>
            <button className="item-add">ADD TO CARD</button>
        </div>
    )
}