import React, { useState } from "react";
import { createText, createBox } from "@shopify/restyle";
import { ThemeProps } from "../../theme";
import TextInput from "../../components/inputs/TextInput";


const Text = createText<ThemeProps>()
const Box = createBox<ThemeProps>()

export default function Growth(){
    const [ts, setTs] = useState("")
    return(
        <Box flex={1} justifyContent="center" alignItems="center">
            <Box width={"95%"} height={200} borderColor="blue_800" borderWidth={2} justifyContent="center" alignItems="center">
            </Box>
        </Box>
    )
}