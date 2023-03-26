import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IContextState {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const centralContext = createContext<IContextState>({
  theme: "light",
  setTheme: () => {},
});
const { Provider } = centralContext;

interface IProps {
  children?: ReactNode;
}

export default function CentralContextProvider(props: IProps) {
  const { children } = props;
  const [theme, setTheme] = useState<string>("light");
  return <Provider value={{ theme, setTheme }}>{children}</Provider>;
}

export const useTheme = () => useContext(centralContext);
