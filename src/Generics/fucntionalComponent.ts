type FunctionalComponent<T extends object = object> = (props: T & { children: any }) => any;

const component: FunctionalComponent<{ name: string; age: number }> = ({
  name,
  age,
  children,
}) => {};
