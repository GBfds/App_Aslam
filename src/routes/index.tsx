import React, { useContext } from "react";
import SignIn from "../screens/NotAuthenticated/SignIn";
import { AuthContext } from "../contexts/AuthContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigation from "./stackNavigation.routes";
import { NavigationContainer } from "@react-navigation/native";


export default function Routes(){
    const {isAuthenticated} = useContext(AuthContext)
    return(
        <SafeAreaProvider>
            <NavigationContainer>
            {isAuthenticated ? <StackNavigation/> : <SignIn/>}  
            </NavigationContainer>
        </SafeAreaProvider>
    )
}