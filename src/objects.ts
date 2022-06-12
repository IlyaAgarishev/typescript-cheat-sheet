const merge = <U, V>(o1: U, o2: V): U & V => {
  return { ...o1, ...o2 };
};

const res_1 = merge({ a: 1 }, { b: 2 });
const res_2 = merge({ a: 1, c: "something" }, { b: 2 });
