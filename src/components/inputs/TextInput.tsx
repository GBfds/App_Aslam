import { createRestyleComponent, createText, createVariant, VariantProps, createBox } from "@shopify/restyle"
import React from "react"
import { TextInput as ReactTextInput, TextInputProps } from "react-native"
import { ThemeProps } from "../../theme"

type CustomTextInputProps = 
VariantProps<ThemeProps, "inputVariants">

const Box = createRestyleComponent<CustomTextInputProps, ThemeProps>([
    createVariant({themeKey: "inputVariants"})
])

const View = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

type ComponentProps ={
    inputProps: TextInputProps;
    variantProps?: CustomTextInputProps;
    message?: string;
}

export default function TextInput({inputProps, variantProps, message}: ComponentProps){
    return(
        <View>
            <Box {...variantProps}>
                <ReactTextInput style={{width: "100%", height: "100%"}} {...inputProps}/>
            </Box>
        </View>
    )
}