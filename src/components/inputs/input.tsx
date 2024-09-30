import { ColorProps, createBox, SpacingProps } from "@shopify/restyle";
import { ThemeProps } from "../../theme";
import { DimensionValue, TextInput } from "react-native";

type InputCustomProps = 
    ColorProps<ThemeProps> 

const Box = createBox<ThemeProps>()

type props= InputCustomProps & {
    placeholder: string;
    placeholderTextColor?: string;
    pdd?: DimensionValue;
    mv?: DimensionValue;
    h: DimensionValue;
    value?: string;
    onChangeText?: (text: string)=> void;
    secureTextEntry?: boolean;
}

export default function Input(props: props){
    return(
        <Box height={props.h} bg="white" width={"90%"} borderRadius={8} marginVertical="m">
            <TextInput 
            placeholder={props.placeholder} 
            placeholderTextColor={props?.placeholderTextColor} 
            style={{width: "100%", height: "100%", color: props?.color, padding: props.pdd}}
            value={props.value}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secureTextEntry}> 
            </TextInput>
        </Box>
    )
}