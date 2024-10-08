import { createRestyleComponent, createVariant, VariantProps } from "@shopify/restyle"
import React from "react"
import { TextInput as ReactTextInput, TextInputProps } from "react-native"
import { ThemeProps } from "../../theme"

type CustomTextInputProps = 
VariantProps<ThemeProps, "inputVariants">

const Box = createRestyleComponent<CustomTextInputProps, ThemeProps>([
    createVariant({themeKey: "inputVariants"})
])

type ComponentProps ={
    inputProps: TextInputProps
    variantProps?: CustomTextInputProps
}

export default function TextInput({inputProps, variantProps}: ComponentProps){
    return(
        <Box {...variantProps}>
            <ReactTextInput style={{width: "100%", height: "100%"}} {...inputProps}/>
        </Box>
    )
}