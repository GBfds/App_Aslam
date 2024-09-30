import React, { ReactNode } from "react";
import { useSafeAreaInsets  } from 'react-native-safe-area-context';
import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../theme";

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

type Props= {
    children: ReactNode;
    canGoBack?: boolean;
}

export default function Screen({children, canGoBack = false}: Props){
    //const safeArea = useSafeAreaInsets()
    return(
        <Box flex={1}>
            {canGoBack && 
            <Box height={100} bg="blue_10">
                <Text>header</Text>
            </Box>}
            {children}
        </Box>
    )
}