const getRandomId = () => `${Math.random()}-${Math.random()}`;

const getRandomNumber = (min, range) =>
  Math.floor((Math.random() * 100 * range) / 100) + min;

const randomFromList = (list) => list[getRandomNumber(0, list.length)];

const names = [
  "Anna",
  "Alyson",
  "Ada",
  "Angela",
  "Alexandra",
  "Laura",
  "Harriet",
  "Taylor",
  "Nina",
  "Margareth",
  "Barbara",
  "Aurora",
  "Daniella",
  "Ivy",
  "Kendall",
  "Kayla",
  "Brooklyn",
  "Ken",
  "Evander",
  "Kim",
  "Lina",
  "Lulu",
  "Carol",
  "Nicolas",
  "Paula",
  "Rebecca",
  "Sophie",
  "Zoe"
];



const getNewsItem = () => ({
  id: getRandomId(),
  title: "Title Placeholder",
  message: "Message about item in the news feed (placeholder)",
  imgSrc:
    "https://via.placeholder.com/300x100.png?text=News+Feed+Image+Placeholder"
});

const getFriend = () => ({
  id: getRandomId(),
  name: randomFromList(names),
  isOnline: Math.random() < 0.5
});

const exportedVariable = {
  "/menu": ["Home", "Profile", "Events", "Clubs"],
  "/news-feed": Array.from({ length: 5 }, getNewsItem),
  "/friends": Array.from({ length: 12 }, getFriend)
};

export default exportedVariable;