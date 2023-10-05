import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import background2Image from "../assets/images/background2.webp"
import logoImage from "../assets/images/logo.webp"
import { Wheel } from "react-custom-roulette"
import { Button } from "../components/Button"
import { useLocation, useNavigate } from "react-router-dom"
import api from "../api"
import { WheelData } from "react-custom-roulette/dist/components/Wheel/types"

interface RouletteProps {}

export const Roulette: React.FC<RouletteProps> = ({}) => {
    const navigate = useNavigate()
    const user: User = useLocation().state?.user

    const [spin, setSpin] = useState(false)
    const [prize, setPrize] = useState(0)

    const options: Record<string, WheelData> = {
        nothing: { option: "Não foi dessa vez" },
        mug: { option: "Caneca" },
        product: { option: "Produto Bongrano" },
    }

    const data: WheelData[] = [
        options.nothing,
        options.mug,
        options.nothing,
        options.product,
        options.nothing,
        options.mug,
        options.nothing,
        options.product,
    ]

    const handleSpinButton = async () => {
        try {
            const prize = await api.roulette(user)
            setPrize(prize)
            setSpin(true)
        } catch {}
    }

    useEffect(() => {
        console.log(user)
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

            <Wheel mustStartSpinning={spin} prizeNumber={prize} data={data} backgroundColors={["orange", "brown"]} textColors={["#ffffff"]} />

            <Button onClick={handleSpinButton}>girar</Button>
        </Box>
    )
}
