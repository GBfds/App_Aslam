import { createContext, ReactNode, useState } from "react"

type AuthContextProps ={
    user: UserPros;
    isAuthenticated: boolean;
    SignIn: () => void;
    SignOut: () => void;
}

type AuthProviderProps={
    children: ReactNode;
}

type UserPros={
    id: string;
    name: string;
    token: string;
}

export const AuthContext = createContext({} as AuthContextProps)

export default function AuthProvider({children}: AuthProviderProps){
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [user, setUser] = useState<UserPros>({
        id: "",
        name: "",
        token: ""
    })

    function SignIn(){
        setIsAuthenticated(true)
    }

    function SignOut(){
        setIsAuthenticated(false)
    }
    return(
        <AuthContext.Provider value={{user, isAuthenticated, SignIn, SignOut}}>
            {children}
        </AuthContext.Provider>
    )
}