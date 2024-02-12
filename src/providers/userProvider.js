import {createContext, useState} from "react";

export const UserContext = createContext(null);

export function UserProvider({children}){
    const [user, setUser] = useState(null);

    const signIn = ({userName})=>{
        userName= "Admin"
        setUser({userName})
    }

    const signOut = () => {
        setUser(null)
    }

    return(
        <UserContext.Provider value={{user, signIn, signOut}}>
            {children}
        </UserContext.Provider>
    )
}
