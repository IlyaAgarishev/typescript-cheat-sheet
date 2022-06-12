interface User {
  name: string;
  age: number;
}

interface Message {
  id: number;
  text: string;
}

interface State<T> {
  loading: boolean;
  error: Error | null;
  data: T;
}

type UserState = State<User>;
type MessageState = State<Message>;

const messageState: MessageState = {
  loading: false,
  error: null,
  data: {
    id: 1,
    text: "Text",
  },
};
