import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import background2Image from "../assets/images/background2.webp"
import logoImage from "../assets/images/logo.webp"
import { Wheel } from "react-custom-roulette"
import { Button } from "../components/Button"
import { useLocation, useNavigate } from "react-router-dom"

interface RouletteProps {}

export const Roulette: React.FC<RouletteProps> = ({}) => {
    const navigate = useNavigate()
    const user: User = useLocation().state?.user

    const [spin, setSpin] = useState(false)

    const options = {
        nothing: { option: "Não foi dessa vez", style: { backgroundColor: "orange", textColor: "white" } },
        mug: { option: "Caneca", style: { backgroundColor: "brown", textColor: "white" } },
        product: { option: "Produto Bongrano", style: { backgroundColor: "brown", textColor: "white" } },
    }

    const data = [options.nothing, options.mug, options.nothing, options.product, options.nothing, options.mug, options.nothing, options.product]

    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    }, [])

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
                alignItems: "center",
            }}
        >
            <img src={logoImage} alt="logo" style={{ width: "50vw" }} />

            <Wheel mustStartSpinning={spin} prizeNumber={0} data={data} backgroundColors={["#3e3e3e", "#df3428"]} textColors={["#ffffff"]} />

            <Button onClick={() => setSpin(true)}>girar</Button>
        </Box>
    )
}
