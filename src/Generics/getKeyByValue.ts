function getKeyByValue<T extends object, U extends keyof T>(obj: T, value: T[U]): U | null {
  const key = (Object.keys(obj) as Array<U>).find((k) => obj[k] === value);

  return key || null;
}

const key = getKeyByValue({ name: "Ilya", age: 23 }, "Ilya");
