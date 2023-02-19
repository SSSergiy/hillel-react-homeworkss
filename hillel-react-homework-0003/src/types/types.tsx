export type AppState = {
  modalOpened: boolean;
  users: object;
};

export type AppProps = {
  data: {
    id: string;
    name: string;
    username: string;
    phone: string;
  }[];
};

export type AppObj = {
  id?: string;
  name?: string;
  username?: string;
  phone?: string;
};
export type ValuesObj = {
  name: string;
  username: string;
  phone: string;
};

export type ModalProps = {
  modalClosed: () => void;
  modalOpened: boolean;
  addUsers: (item: AppObj) => void;
};

export type InputProps = {
  handleChanges(e: React.ChangeEvent<HTMLInputElement>): void;
  htmlFor: string;
  placeholder: string;
  type: string;
  name: string;
  valueName: string;
};

export type PropsInput = {
  errors: {
    id?: string;
    name?: string;
    username?: string;
    phone?: string;
  };
  handleBlur: () => void;
  handleChanges: () => void;
  htmlFor: string;
  name: string;
  placeholder: string;

  touched: {
    id?: boolean;
    name?: boolean;
    username?: boolean;
    phone?: boolean;
  };
  type: string;
  values: {
    name?: string;
    username?: string;
    phone?: string;
  };
};
