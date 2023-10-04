import React from "react"
import { Box, IconButton } from "@mui/material"
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

interface SignupProps {}

export const Signup: React.FC<SignupProps> = ({}) => {
    const navigate = useNavigate()

    const { snackbar } = useSnackbar()

    const initialValues: Form = {
        name: "",
        address: "",
        phone: "",
    }

    const validationSchema = yup.object().shape({
        phone: yup.string().required().length(16),
    })

    const handleSubmit = (values: Form) => {
        if (values.phone.length != 16 || values.phone[5] != "9") {
            snackbar({ severity: "error", text: "Número inválido" })
            return
        } else {
            console.log(values)
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
                justifyContent: "center",
            }}
        >
            <IconButton sx={{ position: "absolute", top: "5vw", left: "5vw" }} onClick={() => navigate("/")}>
                <img src={close_button} alt="voltar" style={{ width: "10vw" }} />
            </IconButton>

            <p style={{ color: "white", fontSize: "8vw", textAlign: "center", fontWeight: "bold" }}>
                Insira seus dados e concorra a prêmios incríveis!
            </p>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, handleChange, errors }) => (
                    <Form>
                        <Box sx={{ flexDirection: "column", gap: "15vw" }}>
                            <TextField label="Nome" name="name" value={values.name} onChange={handleChange} required />
                            <TextField label="Endereço" name="address" value={values.address} onChange={handleChange} required />
                            <TextField
                                label="Whatsapp"
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}
                                InputProps={{ inputComponent: MaskedInput, inputProps: { mask: masks.phone } }}
                                required
                            />

                            <Button type="submit">Finalizar inscrição</Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}
