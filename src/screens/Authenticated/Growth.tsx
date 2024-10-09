import React, { useState } from "react";
import { createText, createBox } from "@shopify/restyle";
import { ThemeProps } from "../../theme";
import Button from "../../components/Buttons/Button";


const Text = createText<ThemeProps>()
const Box = createBox<ThemeProps>()

export default function Growth(){
    return(
        <Box flex={1} justifyContent="center" alignItems="center">
            <Text>Growth</Text>
        </Box>
    )
}