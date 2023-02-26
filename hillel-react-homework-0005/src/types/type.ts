export interface CategoryState {
  Peoples: boolean;
  Planets: boolean;
  Starships: boolean;
}
export type ApiProps = {
  stateCategories: {
    Peoples: boolean;
    Planets: boolean;
    Starships: boolean;
  };
}
export type TitleComponentProps = {
  itemName: string;
  handleClick: () => void;
}