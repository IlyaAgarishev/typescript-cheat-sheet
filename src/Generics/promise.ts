const fakeRequest = async () => {
  return 2;
};

const b: Promise<number> = fakeRequest();

// эквивалентные типы для объектов:

type Obj1 = {
  [x: string]: number;
};

type Obj2 = Record<string, number>;
