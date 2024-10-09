import React, { useContext } from "react";
import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../theme";
import { AuthContext } from "../../contexts/AuthContext";
import Screen from "../../components/screen/Screen";
import Button from "../../components/Buttons/Button";
import { useNavigation } from "@react-navigation/native";
import { StackRoutesTypes } from "../../routes/stackNavigation.routes";
import { StyleSheet } from "react-native";

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

export default function HomeScreen(){
    const navigation = useNavigation<StackRoutesTypes>()
    const {SignOut} = useContext(AuthContext)

    return(
        <Screen>
            <Box 
            flex={1} 
            flexDirection="row"
            justifyContent="space-between"
            backgroundColor="blue_10" 
            flexWrap="wrap"
            padding="m"
            gap="s"
            >
            <Button
            ComponentProps={{
                variant: "medium",
                title: "Caixa financeiro",
                textColor: "white",
                padding: "s" 
            }} 
            ButtonProps={{
                onPress: ()=> navigation.navigate("Cash"),
                style: Style.ButtonMenu
            }}/>

            <Button
            ComponentProps={{
                variant: "medium",
                title: "Crescimento da empresa",
                textColor: "white",
                padding: "s" 
            }} 
            ButtonProps={{
                onPress: ()=> navigation.navigate("Growth"),
                style: Style.ButtonMenu
            }}/>

            <Button
            ComponentProps={{
                variant: "medium",
                title: "Faturamento de plano",
                textColor: "white",
                padding: "s" 
            }} 
            ButtonProps={{
                onPress: ()=> navigation.navigate("Invoicing"),
                style: Style.ButtonMenu
            }}/>
            </Box>

            <Box
            width={80}
            height={80}
            position="absolute"
            right={30}
            bottom={50}
            >
                <Button
                    ComponentProps={{
                        variant: "logout",
                        icon:"logout-variant",
                        iconColor:"white",
                    }}
                    ButtonProps={{
                        onPress: SignOut
                    }}
                
                />
            </Box>
        </Screen>
    )
}

const Style = StyleSheet.create({
    ButtonMenu:{
        width: "30%",
        height: 80
    }
})