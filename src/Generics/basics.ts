// Generics - это параметризованный тип, позволяющий объявлять параметры типа, являющиеся временной заменой монолитных типов, оределение которых будет выполнено
// в момент использования. Их можно использовать не только в типах, но также в классах и ф-иях.

type Cat = {
  age: number;
  name: string;
  color: string;
  isFat: boolean;
};

const identity = <T>(arg: T): T => {
  return arg;
};

const s: string = "str";
const n: number = 1;
const c: Cat = {
  age: 8,
  name: "Jeffrey",
  color: "ginger",
  isFat: true,
};

const result_1 = identity(s);
const result_2 = identity(n);
const result_3 = identity(c);
