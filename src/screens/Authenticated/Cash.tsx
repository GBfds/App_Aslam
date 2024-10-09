import React, { useState } from "react";
import { createText, createBox } from "@shopify/restyle";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView as SafeArea } from "react-native";

import { db } from "../../../db";
import { ThemeProps } from "../../theme";
import {StackRoutesTypes} from "../../../src/routes/stackNavigation.routes"

import Button from "../../components/Buttons/Button";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import Table from "../../components/intens/Table";


const Text = createText<ThemeProps>()
const Box = createBox<ThemeProps>()

export default function Cash(){
    const sizeSafeArea = useSafeAreaInsets()
    const [date, setDate] = useState(new Date())

    function NextDate(){
        const novaData = new Date(date);
        novaData.setDate(novaData.getDate() + 1);
        setDate(novaData)
        
    }

    function PreviusDate(){
        const novaData = new Date(date);
        novaData.setDate(novaData.getDate() - 1);
        setDate(novaData)
    }

    const navigation = useNavigation<StackRoutesTypes>()
    return(
        <SafeAreaView style={{flex:1, marginBottom: sizeSafeArea.bottom}}>
        <Box flex={1} justifyContent="flex-start" alignItems="center" marginVertical="l">
            <Box 
            width={"96%"} 
            minHeight={95} 
            bg="blue_200" 
            borderRadius={8}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
                <Button 
                ComponentProps={{
                    variant:"small" ,
                    title:"Voltar" ,
                    iconColor:"white",
                    icon:"arrow-left-bottom",
                    textColor:"white",
                }}
                ButtonProps={{
                    onPress: ()=> navigation.goBack()
                }}
                />

                <Text variant="mediumLigth">Empresa X</Text>

                <Button 
                ComponentProps={{
                    variant:"small" ,
                    title:"recarregar" ,
                    icon:"refresh",
                    textColor:"white",
                    iconColor:"white",
                }}/>
            </Box>

            <Box 
            width={"96%"} 
            bg="blue_100"
            flexDirection="row" 
            justifyContent="space-around"
            marginVertical="m"
            minHeight={80}
            borderRadius={8}
            alignItems="center"
            elevation={8}>
                <Button 
                ComponentProps={{
                    variant:"small",
                    title:"Dia Anterior",
                    iconColor:"white",
                    icon:"arrow-left" ,
                    textColor:"white",
                }}
                ButtonProps={{
                    onPress: PreviusDate
                }}/>

                <Text variant="medium">{date.toLocaleDateString('pt-BR')}</Text>

                <Button 
                ComponentProps={{
                    variant:"small" ,
                    title:"Dia Seguinte",
                    iconColor:"white",
                    icon:"arrow-right" ,
                    textColor:"white",
                }}
                ButtonProps={{
                    onPress: NextDate
                }}/>
            </Box>

            <SafeArea style={{width: "100%", 
                alignItems: "center", marginBottom: 100}}>
                <FlatList              
                data={db.caixa}
                renderItem={({item})=> <Table item={item}/>}
                keyExtractor={(item=> item.id)}
                />
            </SafeArea>
        </Box>
        </SafeAreaView>
    )
}