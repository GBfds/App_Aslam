import React from "react";
import { createRestyleComponent, createText, createVariant, spacing, SpacingProps, VariantProps } from "@shopify/restyle";
import { DimensionValue, TouchableOpacity } from "react-native";
import theme,{ ThemeProps } from "../../theme";
//import {MaterialIcons} from "@expo/vector-icons"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type ButtonCustomProps= 
    SpacingProps<ThemeProps> &
    VariantProps<ThemeProps, "buttonVariants">

const Box = createRestyleComponent<ButtonCustomProps ,ThemeProps>([
    spacing,
    createVariant({themeKey: "buttonVariants"})
])
const Text = createText<ThemeProps>()


type Props = ButtonCustomProps & {
    title: string;
    onPress?: ()=> void;
    icon?: keyof typeof MaterialCommunityIcons.glyphMap;
    textColor?: keyof typeof theme.colors;
    iconColor?: keyof typeof theme.colors;
    iconSize?: DimensionValue;
    textVariants?: "title" | "medium" | undefined;
}

export default function Button(props: Props){
    return(
        <TouchableOpacity onPress={props.onPress}>
            <Box {...props}>
                <Text color={props.textColor}>{props.title}</Text>
                {props.icon && <MaterialCommunityIcons color={props.iconColor} name={props.icon} size={30}/>}
            </Box>
        </TouchableOpacity>
    )
}