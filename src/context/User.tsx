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

type DataType = {
    FirstName: string
    LastName: string
    email: string
    username: string
    id: number
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
    const [user, setUser] = useState<DataType | null>({} as DataType || null);

    useEffect(() => {
        console.log(localStorage.getItem('token'));
        
       Axios.get('/users/checkLoggedIn',{headers:{
        Authorization: `${localStorage.getItem('token')}`
       }}).then((data) => {
        console.log(data);
        if(data?.data?.username){
            setUser(data.data);
        }
       }).catch((err) => {
              console.log(err.response);
         }
         );
    }, []);
    return (
        <UserContext.Provider value={{ user , setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);