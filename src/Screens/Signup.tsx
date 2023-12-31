import React, { useState } from "react"
import { Box, Checkbox, CircularProgress, FormControlLabel, IconButton } from "@mui/material"
import background2Image from "../assets/images/background2.webp"
import close_button from "../assets/icons/close_button.svg"
import { useNavigate } from "react-router-dom"
import { Form, Formik, FormikHelpers } from "formik"
import { TextField } from "../components/TextField"
import { Button } from "../components/Button"
import MaskedInput from "../components/MaskedInput"
import masks from "../assets/masks"
import * as yup from "yup"
import { useSnackbar } from "burgos-snackbar"
import api from "../api"
import { colors } from "../style/colors"

interface SignupProps {}

export const Signup: React.FC<SignupProps> = ({}) => {
    const navigate = useNavigate()

    const { snackbar } = useSnackbar()

    const [loading, setLoading] = useState(false)
    const [curitiba, setCuritiba] = useState(true)

    const initialValues: Form = {
        name: "",
        address: "",
        phone: "",
    }

    const validationSchema = yup.object().shape({
        phone: yup.string().required().length(16),
    })

    const handleSubmit = async (values: Form) => {
        if (values.phone.length != 16 || values.phone[5] != "9") {
            snackbar({ severity: "error", text: "Número inválido" })
            return
        } else {
            setLoading(true)
            try {
                const response = await api.signup(values)

                if (response.error) {
                    snackbar({ severity: "error", text: response.error })
                } else if (response.code) {
                    const code = response.code
                    const user = response.user
                    navigate("/validation", { state: { code, user } })
                }
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
    }

    return (
        <Box
            sx={{
                flexDirection: "column",
                width: "100vw",
                height: "100vh",
                backgroundImage: `url(${background2Image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "10vw 15vw",
                gap: "10vw",
                justifyContent: "center ",
            }}
        >
            <IconButton sx={{ position: "absolute", top: "5vw", left: "5vw" }} onClick={() => navigate("/")}>
                <img src={close_button} alt="voltar" style={{ width: "10vw" }} />
            </IconButton>

            <p style={{ color: "white", fontSize: "8vw", textAlign: "center", lineHeight: "10vw" }}>
                Insira seus dados e concorra a prêmios incríveis!
            </p>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, handleChange, errors }) => (
                    <Form>
                        <Box sx={{ flexDirection: "column", gap: "8vw" }}>
                            <TextField
                                label="Nome"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                size="small"
                                required
                                inputProps={{ style: { textAlign: "center" } }}
                            />
                            <FormControlLabel
                                label="Você mora em Curitiba?"
                                sx={{
                                    color: "white",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    gap: "2vw",
                                    width: "100%",
                                    margin: 0
                                }}
                                labelPlacement="top"
                                control={
                                    <Checkbox
                                        checked={curitiba}
                                        onChange={(ev, checked) => setCuritiba(checked)}
                                        edge={false}
                                        sx={{
                                            color: "#EBEBEB",
                                            padding: 0,
                                            borderRadius: "2vw",
                                            width: "4vw"
                                        }}
                                    />
                                }
                            />
                            <TextField
                                label={curitiba ? "Bairro" : "Cidade"}
                                name="address"
                                value={values.address}
                                onChange={handleChange}
                                size="small"
                                inputProps={{ style: { textAlign: "center" } }}
                                required
                            />
                            <TextField
                                label="Whatsapp"
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}
                                InputProps={{ inputComponent: MaskedInput, inputProps: { mask: masks.phone, style: { textAlign: "center" } } }}
                                size="small"
                                required
                            />

                            <Button
                                type="submit"
                                sx={{
                                    marginTop: "15vw",
                                }}
                            >
                                {loading ? <CircularProgress size={"2rem"} color="secondary" /> : "Finalizar inscrição"}
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}
