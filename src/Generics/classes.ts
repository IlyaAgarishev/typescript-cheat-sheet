class DataCollection<T extends { id: string }> {
  constructor(public data: T[]) {}

  search(id: string): T | null {
    return this.data.find((d) => d.id === id) || null;
  }
}

type User1 = {
  id: string;
  name: string;
};

type Message1 = {
  id: string;
  text: string;
};

const usersArr: User1[] = [
  {
    id: "1",
    name: "Max",
  },
];

const messagesArr: Message1[] = [
  {
    id: "1",
    text: "some text",
  },
];

const user = new DataCollection(usersArr).search("1");
const message = new DataCollection(messagesArr).search("1");
