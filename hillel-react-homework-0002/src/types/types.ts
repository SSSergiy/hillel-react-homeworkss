export type MyState = {
  title: string;
  id: number;
  done: boolean;
}
export type MyProps = {
  item: {
    title: string;
    id: number;
    done: boolean;
  };
}
export type MyPropsFunc = {
  addState: (states: MyState) => void;
};