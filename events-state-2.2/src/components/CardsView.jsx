import ShopCard from "./ShopCard"

export default function CardsView({cards}) {
    return (
        <div className="card-view">
            {cards.map(card => {
                return <ShopCard card={card}></ShopCard>
            })}
        </div>
    )
}