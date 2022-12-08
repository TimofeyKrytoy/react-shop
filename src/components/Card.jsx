export default function Card({
  name,
  description,
  color,
  price,
  id,
  rating,
  img,
}) {
  return (
    <div className=" border-2 rounded-sm p-2 text-xl">
      <div className="rounded-full overflow-hidden w-16 h-16 mx-auto">
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
  );
}
