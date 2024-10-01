import React, { useContext } from "react";
import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../theme";
import { AuthContext } from "../../contexts/AuthContext";
import Screen from "../../components/screen/Screen";
import Button from "../../components/Buttons/Button";
import { useNavigation } from "@react-navigation/native";
import { StackRoutesTypes } from "../../routes/stackNavigation.routes";

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

export default function HomeScreen(){
    const navigation = useNavigation<StackRoutesTypes>()
    const {SignOut} = useContext(AuthContext)

    return(
        <Screen>
            <Box 
            flex={1} 
            backgroundColor="blue_10" 
            flexDirection="row"
            flexWrap="wrap"
            padding="m"
            gap="s"
            justifyContent="space-between"
            >
            <Button variant="medium" title="Caixa financeiro"  textColor="white" textVariants="medium"
            icon="cash-plus" iconColor="white"
            padding="s" 
            onPress={()=> navigation.navigate("Cash")}/>
            <Button variant="medium" title="Crescimento da empresa" textColor="white" textVariants="medium"
            icon="finance" iconColor="white"
            padding="s"
            onPress={()=> navigation.navigate("Growth")}/>
            <Button variant="medium" title="Faturamento de plano" textColor="white" textVariants="medium"
            icon="bank-transfer" iconColor="white"
            padding="s"
            onPress={()=> navigation.navigate("Invoicing")}/>
            </Box>

            <Box
            width={80}
            height={80}
            position="absolute"
            right={30}
            bottom={50}
            >
                <Button
                variant="logout"
                icon="logout-variant"
                iconColor="white"
                onPress={SignOut}/>
            </Box>
        </Screen>
    )
}