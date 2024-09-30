import React from "react";
import { createText, createBox } from "@shopify/restyle";
import { ThemeProps } from "../../theme";


const Text = createText<ThemeProps>()
const Box = createBox<ThemeProps>()

export default function Invoicing(){
    return(
        <Box flex={1} justifyContent="center" alignItems="center">
            <Text variant="title">Invoicing</Text>
        </Box>
    )
}