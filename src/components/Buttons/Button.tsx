import React from "react";
import { createRestyleComponent, createText, createVariant, spacing, SpacingProps, VariantProps, TextProps } from "@shopify/restyle";
import { DimensionValue, TouchableOpacity, TouchableOpacityProps } from "react-native";
import theme,{ ThemeProps } from "../../theme";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type ButtonCustomProps= 
    SpacingProps<ThemeProps> &
    VariantProps<ThemeProps, "buttonVariants">

const Box = createRestyleComponent<ButtonCustomProps ,ThemeProps>([
    spacing,
    createVariant({themeKey: "buttonVariants"})
])
const Text = createText<ThemeProps>()


type TypeProps = ButtonCustomProps & {
    title?: string;
    icon?: keyof typeof MaterialCommunityIcons.glyphMap;
    textColor?: keyof typeof theme.colors;
    iconColor?: keyof typeof theme.colors;
    iconSize?: DimensionValue;
    //textVariants?: textCustomProps
}

type Props ={
    ButtonProps?: TouchableOpacityProps;
    ComponentProps: TypeProps
}

export default function Button({ButtonProps, ComponentProps}: Props){
    return(
        <TouchableOpacity {...ButtonProps}>
            <Box {...ComponentProps}>
                {ComponentProps?.title &&<Text color={ComponentProps?.textColor}>{ComponentProps?.title}</Text>}
                {ComponentProps?.icon && <MaterialCommunityIcons color={ComponentProps?.iconColor} name={ComponentProps?.icon} size={30}/>}
            </Box>
        </TouchableOpacity>
    )
}