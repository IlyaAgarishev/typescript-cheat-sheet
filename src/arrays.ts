const getRandomElement = <T>(items: T[]): T => {
  const randomIndex = Math.floor(Math.random() * items.length);

  return items[randomIndex];
};

const numberEl = getRandomElement([1, 2, 3, 4, 5]);
const stringEl = getRandomElement(["a", "b", "c"]);
const stringOrNumberEl = getRandomElement(["a", 2, "c", 4]);
