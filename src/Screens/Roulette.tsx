import React, { useEffect, useState } from "react"
import { Box, CircularProgress } from "@mui/material"
import background2Image from "../assets/images/background2.webp"
import logoImage from "../assets/images/title.webp"
import { Wheel } from "react-custom-roulette"
import { Button } from "../components/Button"
import { useLocation, useNavigate } from "react-router-dom"
import api from "../api"
import { WheelData } from "react-custom-roulette/dist/components/Wheel/types"
import { useSnackbar } from "burgos-snackbar"

interface RouletteProps {}

export const Roulette: React.FC<RouletteProps> = ({}) => {
    const navigate = useNavigate()
    const user: User = useLocation().state?.user

    const { snackbar } = useSnackbar()

    const [spin, setSpin] = useState(false)
    const [prize, setPrize] = useState<number>()
    const [loading, setLoading] = useState(false)

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
        if (loading) return

        try {
            setLoading(true)
            const response = await api.roulette(user)

            if (response.error) {
                snackbar({ severity: "error", text: response.error })
            } else {
                setPrize(response.prize)
            }
        } catch {}

        setLoading(false)
    }

    const handleStop = () => {
        alert(prize)
    }

    useEffect(() => {
        console.log({ prize })
        if (prize !== undefined) {
            setSpin(true)
        }
    }, [prize])

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
                gap: "5vw",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <img src={logoImage} alt="logo" style={{ width: "70vw" }} />

            <Wheel
                mustStartSpinning={spin}
                prizeNumber={prize || 0}
                data={data}
                backgroundColors={["orange", "brown"]}
                textColors={["#ffffff"]}
                onStopSpinning={handleStop}
            />

            <Button onClick={handleSpinButton}>{loading ? <CircularProgress size={"1.68rem"} color="secondary" /> : "Girar roleta"}</Button>
        </Box>
    )
}
