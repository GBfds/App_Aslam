import React, { useContext } from "react";
import { createBox } from "@shopify/restyle";
import {useForm, Controller} from "react-hook-form";

import { ThemeProps } from "../../theme";
import { AuthContext } from "../../contexts/AuthContext";
//import Input from "../../components/inputs/input";
import Button from "../../components/Buttons/Button";
import TextInput from "../../components/inputs/TextInput";

type FormData={
    email: string;
    password: string
}

const Box = createBox<ThemeProps>()

export default function SignIn(){
    const {SignIn} = useContext(AuthContext)

    const {control, handleSubmit, formState:{errors}} = useForm<FormData>()

    function Submit(data: FormData){
        console.log(data);
        SignIn()
        
    }
    return(
        <Box flex={1} justifyContent="center" alignItems="center">
            <Box 
            width={"90%"} 
            minHeight={300} 
            justifyContent="center" 
            alignItems="center"
            bg="blue_100"
            borderRadius={8}
            elevation={5}
            padding="s">
                <Controller
                control={control}
                name="email"
                render={({field:{value, onChange}})=>(
                    <TextInput
                    inputProps={{
                        value: value,
                        onChangeText: onChange,
                        placeholder: "Digite seu Email"
                    }}
                    
                    />)}
                />
                
                <Controller
                control={control}
                name="password"
                render={({field:{value, onChange}})=>(
                    <TextInput
                    inputProps={{
                        value: value,
                        onChangeText: onChange,
                        placeholder: "Digite seu Email"
                    }}
                    />
                )}/>

                <Button title="Acessar" marginVertical="m" onPress={handleSubmit(Submit)}/>
            </Box>
        </Box>
    )
}