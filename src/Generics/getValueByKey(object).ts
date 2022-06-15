const getValue = <T extends object, U extends keyof T>(obj: T, prop: U) => {
  return obj[prop];
};

const obj1 = getValue({ name: "Ilya", age: 23 }, "age");
