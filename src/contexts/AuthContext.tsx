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
    const [user, setUser] = useState<UserPros>({
        id: "",
        name: "",
        token: ""
    })

    //Autenticação fica condicionada a existencia de um token
    const isAuthenticated = !!user.token

    //Esperando os tipos de dados do usuario, informações seram gurdadas usando AsyncStorage
    function SignIn(){
        setUser({
            id: "",
            name: "",
            token: "Token"
        })
    }

    //SignOut apaga registro do AsyncStorage
    function SignOut(){
        setUser({
            id: "",
            name: "",
            token: ""
        })
    }
    return(
        <AuthContext.Provider value={{user, isAuthenticated, SignIn, SignOut}}>
            {children}
        </AuthContext.Provider>
    )
}