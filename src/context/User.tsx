"use client";

import Axios from "@/utils/Axios";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import Cookies from "js-cookie";

type DataType = {
  FirstName: string;
  LastName: string;
  email: string;
  username: string;
  id: number;
};

interface ContextProps {
  user: DataType | null;
  setUser: Dispatch<SetStateAction<DataType | null>>;
}

const UserContext = createContext<ContextProps>({
  user: {} as DataType | null,
  setUser: (): DataType | null => {
    return {} as DataType | null;
  },
});

export const UserContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<DataType | null>(({} as DataType) || null);

  useEffect(() => {
    const cookie = Cookies.get("token");

    Axios.get("/users/checkLoggedIn", {
      headers: {
        Authorization: `${cookie}`,
      },
    })
      .then((data) => {
        console.log(data);
        if (data?.data?.username) {
          setUser(data.data);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
