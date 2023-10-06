import React, { useEffect, useRef, useState } from "react"
import { Box, IconButton } from "@mui/material"
import { Background } from "../components/Background"
import { TextField } from "../components/TextField"
import { useLocation, useNavigate } from "react-router-dom"
import MaskedInput from "../components/MaskedInput"
import { useSnackbar } from "burgos-snackbar"
import CloseIcon from "@mui/icons-material/Close"
import { colors } from "../style/colors"

interface ValidationProps {}

export const Validation: React.FC<ValidationProps> = ({}) => {
    const validCode: string = useLocation().state?.code
    const user: User = useLocation().state?.user
    const inputRef = useRef<HTMLInputElement | null>(null)

    const navigate = useNavigate()

    const { snackbar } = useSnackbar()

    const [code, setCode] = useState("")

    const validateCode = (code: string) => {
        if (code == validCode.toUpperCase()) {
            navigate("/roulette", { state: { user } })
        } else {
            snackbar({ severity: "error", text: "Código inválido" })
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = event.target.value.toUpperCase()

        if (value.length == 5) {
            validateCode(value)
        }

        setCode(value)
    }

    useEffect(() => {
        if (!user) {
            navigate("/")
        } else {
            inputRef.current?.focus()
        }
    }, [])

    return (
        <Background>
            <Box
                sx={{
                    flexDirection: "column",
                    height: "70vh",
                    justifyContent: "space-between",
                    padding: "10vw 15vw",
                }}
            >
                <IconButton
                    sx={{ position: "absolute", top: "5vw", left: "5vw", zIndex: 5, border: `2px solid ${colors.secondary}` }}
                    onClick={() => navigate("/")}
                    color="secondary"
                >
                    <CloseIcon />
                </IconButton>
                <p
                    style={{
                        color: `${colors.text.primary}`,
                        fontSize: "7vw",
                        fontWeight: "700",
                        textAlign: "center",
                        lineHeight: "8vw",
                        zIndex: "2",
                    }}
                >
                    Agradecemos sua participação!
                </p>
                <p
                    style={{
                        color: `${colors.text.secondary}`,
                        fontSize: "6vw",
                        fontWeight: "700",
                        textAlign: "center",
                        lineHeight: "8vw",
                        zIndex: "2",
                    }}
                >
                    Está pronto(a) para a 'Roleta Alemã'? Use o código de ativação fornecido no espaço abaixo
                </p>
                <Box
                    sx={{
                        zIndex: 10
                    }}
                    >
                    <TextField
                        inputRef={inputRef}
                        label="Código"
                        value={code}
                        onChange={handleChange}
                        color="secondary"
                        InputProps={{ inputComponent: MaskedInput, inputProps: { mask: "*****" },
                        sx: {
                                // border: `2px solid ${colors.secondary}`,
                                borderRadius: "6vw",
                            }
                        }}
                    />
                </Box>
            </Box>
        </Background>
    )
}
