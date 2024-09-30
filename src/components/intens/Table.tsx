import { createBox, createText } from "@shopify/restyle";
import React from "react";
import { ThemeProps } from "../../theme";
import { db } from "../../../db";

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

type Props = {
    item: typeof db.caixa[0]
}

export default function Table({item}: Props){
    return(
        <Box minWidth={"90%"} 
        bg="blue_100" 
        alignItems="stretch" 
        marginBottom="l"
        borderRadius={8}
        p="s">
            
            <Box borderBottomColor="black" borderBottomWidth={1}  flexDirection="row" alignItems="center" justifyContent="space-between">
                <Text variant="medium">Caixa</Text>
                <Text variant="medium">Valor</Text>
            </Box>
            <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                <Text >Caixa Inical</Text>
                <Text >{item.caixaInicial}</Text>
            </Box>

            <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                <Text >Dinheiro</Text>
                <Text >{item.dinheiro}</Text>
            </Box>
            <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                <Text >Cheque</Text>
                <Text >{item.cheque}</Text>
            </Box>
            <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                <Text >Cartão de crédito</Text>
                <Text >{item.cartaoDeC}</Text>
            </Box>
            <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                <Text >Cartão de Débito</Text>
                <Text >{item.cartaoDeD}</Text>
            </Box>
            <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                <Text >Trandeferência</Text>
                <Text >{item.transferencia}</Text>
            </Box>
            <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                <Text >Saldo da Caixa</Text>
                <Text >{item.saldoBruto}</Text>
            </Box>
            <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                <Text >Saldo Liquido</Text>
                <Text >{item.saldoLiquido}</Text>
            </Box>
        </Box>
    )
}