import React, { useState } from "react"
import { Box } from "@mui/material"
import { Background } from "../components/Background"
import { TextField } from "../components/TextField"
import { useLocation } from "react-router-dom"
import MaskedInput from "../components/MaskedInput"

interface ValidationProps {}

export const Validation: React.FC<ValidationProps> = ({}) => {
    const validCode: string = useLocation().state?.code

    const [code, setCode] = useState("")

    const validateCode = (code: string) => {
        if (code == validCode) {
            console.log("igual")
        } else {
            console.log("diferente")
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = event.target.value.toUpperCase()

        if (value.length == 5) {
            validateCode(value)
        }

        setCode(value)
    }

    return (
        <Background>
            <p>Agradecemos sua participação!</p>

            <p>Está pronto(a) para a 'Roleta Alemã'? Use o código de ativação fornecido no espaço abaixo</p>

            <Box sx={{ zIndex: 10 }}>
                <TextField
                    label="Código"
                    value={code}
                    onChange={handleChange}
                    InputProps={{ inputComponent: MaskedInput, inputProps: { mask: "*****" } }}
                />
            </Box>
        </Background>
    )
}
