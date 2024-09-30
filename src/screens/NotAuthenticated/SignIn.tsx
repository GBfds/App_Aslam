import React, { useContext } from "react";
import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../theme";
import Input from "../../components/inputs/input";
import Button from "../../components/Buttons/Button";
import {useForm, Controller} from "react-hook-form"
import { AuthContext } from "../../contexts/AuthContext";

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
                    <Input
                    placeholder="Email"
                    h={46}
                    pdd={8}
                    value={value}
                    onChangeText={onChange}/>)}
                />
                
                <Controller
                control={control}
                name="password"
                render={({field:{value, onChange}})=>(
                    <Input
                    placeholder="Senha"
                    h={46}
                    pdd={8}
                    value={value}
                    onChangeText={onChange}/>
                )}/>

                <Button title="Acessar" marginVertical="m" onPress={handleSubmit(Submit)}/>
            </Box>
        </Box>
    )
}