export const generateCards = (n = 100) => {
  const cards = [];
  for (let i = 0; i < n; i++) {
    cards.push(generateCard());
  }

  return cards;
};

const generateCard = () => ({
  name: arrayRandElement(name),
  description: arrayRandElement(description),
  color: arrayRandElement(color),
  price: randomInteger(10, 9999),
  rating: randomInteger(1, 100),
  id: Date.now() + getRandomString(),
  img: arrayRandElement(img),
});

const getRandomString = () => Math.random().toString(36).substring(2);

function arrayRandElement(arr) {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

const name = [
  "Богдан",
  "Сергей",
  "Стас",
  "Кирилл",
  "Никита",
  "Тролебузина",
  "Максим",
];

const color = [
  "синий",
  "красный",
  "зеленый",
  "голубой",
  "фиолетовый",
  "желтый",
  "черный",
  "белый",
  "розовый",
  "серый",
];

const description = [
  "клевый",
  "нежный",
  "доступный",
  "уникальный",
  "дешевый",
  "любимый",
];

const img = [
  "https://www.pngkey.com/png/detail/14-148130_minion-imagenes-de-100x100-pixeles.png",
  "https://go64.ru/upload/quickly/cat-2143332_1280.jpg",
  "https://i.pinimg.com/474x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg",
  "https://www.blast.hk/attachments/64804/",
  "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg",
];
