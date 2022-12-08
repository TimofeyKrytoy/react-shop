import './Card.css'
export default function Card({ name, description, color, price, id, rating, img }) {
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={img} alt="card" />
            </div>
            <div>
                <div>
                    <p>{name}</p>
                </div>
                <div>
                    <p>{description}</p>
                </div>
                <div>
                    <p>Цвет: {color}</p>
                </div>
                <div>
                    <p>Рейтинг: {rating}</p>
                </div>
                <div>
                    <p>Цена: ${price}</p>
                </div>
            </div>
        </div>
    )
}
