import { createRestyleComponent, createVariant, VariantProps } from "@shopify/restyle"
import React from "react"
import { TextInput as ReactTextInput, TextInputProps } from "react-native"
import { ThemeProps } from "../../theme"

type CustomTextInputProps = 
VariantProps<ThemeProps, "inputVariants">

const Box = createRestyleComponent<CustomTextInputProps, ThemeProps>([
    createVariant({themeKey: "inputVariants"})
])

type PropsComponent = CustomTextInputProps

export default function TextInput(InputProps: TextInputProps, PropsComponent: PropsComponent){
    return(
        <Box {...PropsComponent}>
            <ReactTextInput style={{width: "100%", height: "100%"}} {...InputProps}/>
        </Box>
    )
}