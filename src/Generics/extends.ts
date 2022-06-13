interface Length {
  length: number;
}

const len = <T extends Length>(collection: T) => {
  return collection.length;
};

const len1 = len([1, 2, 3, 4]);
const len2 = len("Hello");

// У number нету св-а length:
// const len3 = len(3);
