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
        <p className="text-center font-semibold">{name}</p>
        <p>{description}</p>

        <p>
          <span className="text-gray-500">Цвет: </span>
          {color}
        </p>
        <p>
          <span className="text-gray-500">Рейтинг: </span>
          {rating}
        </p>
        <p>
          <span className="text-gray-500">Цена: </span>${price}
        </p>
      </div>
    </div>
  );
}
