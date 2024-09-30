import React from "react"
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/Authenticated/HomeScreen"
import theme from "../theme"
import Invoicing from "../screens/Authenticated/Invoicing";
import Cash from "../screens/Authenticated/Cash";
import Growth from "../screens/Authenticated/Growth";

export type StackRoutesNavigation ={
    Home: undefined;
    Invoicing: undefined;
    Cash: undefined;
    Growth: undefined;
}

export type StackRoutesTypes = NativeStackNavigationProp<StackRoutesNavigation>

const Stack = createNativeStackNavigator()

export default function StackNavigation(){
    return(
        <Stack.Navigator initialRouteName="Home" 
        screenOptions={{
            headerStyle:{
            backgroundColor: theme.colors.blue_10
        }}}>
            
            <Stack.Screen
            name="Home"
            component={HomeScreen}/>
            <Stack.Screen
            name="Invoicing"
            component={Invoicing}/>
            <Stack.Screen
            name="Cash"
            component={Cash}
            options={{
                headerShown: false
            }}/>
            <Stack.Screen
            name="Growth"
            component={Growth}/>
        </Stack.Navigator>
    )
}