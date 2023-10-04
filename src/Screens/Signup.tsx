import React from "react"
import { Box, IconButton } from "@mui/material"
import background2Image from "../assets/images/background2.webp"
import close_button from "../assets/icons/close_button.svg"
import { useNavigate } from "react-router-dom"
import { Form, Formik } from "formik"
import { TextField } from "../components/TextField"
import { Button } from "../components/Button"
import MaskedInput from "../components/MaskedInput"
import masks from "../assets/masks"

interface SignupProps {}

export const Signup: React.FC<SignupProps> = ({}) => {
    const navigate = useNavigate()

    const initialValues: Form = {
        name: "",
        address: "",
        phone: "",
    }

    const handleSubmit = (values: Form) => {
        console.log(values)
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
                {({ values, handleChange }) => (
                    <Form>
                        <Box sx={{ flexDirection: "column", gap: "15vw" }}>
                            <TextField label="Nome" name="name" value={values.name} onChange={handleChange} />
                            <TextField label="Endereço" name="address" value={values.address} onChange={handleChange} />
                            <TextField
                                label="Whatsapp"
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}
                                InputProps={{ inputComponent: MaskedInput, inputProps: { mask: masks.phone } }}
                            />

                            <Button type="submit">Finalizar inscrição</Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}
