const getValueByKey = <T extends object, U extends keyof T>(obj: T, prop: U) => {
  return obj[prop];
};

const obj1 = getValueByKey({ name: "Ilya", age: 23 }, "age");
