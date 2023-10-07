import React, { useEffect, useState } from "react"
import { Box, CircularProgress } from "@mui/material"
import background2Image from "../assets/images/background2.webp"
import logoImage from "../assets/images/title.webp"
import moldura from "../assets/images/roleta.png"
import { Wheel } from "react-custom-roulette"
import { Button } from "../components/Button"
import { useLocation, useNavigate } from "react-router-dom"
import api from "../api"
import { WheelData } from "react-custom-roulette/dist/components/Wheel/types"
import { useSnackbar } from "burgos-snackbar"
import { Result } from "../components/Result"
import { colors } from "../style/colors"

interface RouletteProps {}

export const Roulette: React.FC<RouletteProps> = ({}) => {
    const navigate = useNavigate()
    const user: User = useLocation().state?.user

    const { snackbar } = useSnackbar()

    const [spin, setSpin] = useState(false)
    const [prize, setPrize] = useState<number>()
    const [loading, setLoading] = useState(false)
    const [openResult, setOpenResult] = useState(false)
    const [disableButton, setDisableButton] = useState(false)

    const options: Record<string, WheelData> = {
        nothing: { option: "Não foi dessa vez   " },
        mug: { option: "Caneca" },
        product: { option: "Produto Bongrano   " },
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

    const handleLeave = () => {
        navigate("/")
    }

    const handleStop = () => {
        setOpenResult(true)
        setDisableButton(false)
    }

    useEffect(() => {
        console.log({ prize })
        if (prize !== undefined) {
            setSpin(true)
            setDisableButton(true)
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

            <Box
                sx={{
                    position: "relative",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "5vw"
                }}
            >
                <img src={moldura} alt=""
                    style={{
                        position: "absolute",
                        width: "115%",
                        height: "auto",
                    }}
                />
                <Wheel
                    mustStartSpinning={spin}
                    prizeNumber={prize || 0}
                    data={data}
                    backgroundColors={[`${colors.wheel.slots1}`, `${colors.wheel.slots2}`]}
                    radiusLineColor={`${colors.wheel.radius}`}
                    innerBorderColor={`${colors.wheel.innerBorder}`}
                    outerBorderColor={`${colors.wheel.outerBorder}`}
                    innerBorderWidth={0}
                    outerBorderWidth={5}
                    textColors={[`${colors.wheel.text1}`, `${colors.wheel.text2}`]}
                    onStopSpinning={handleStop}
                    pointerProps={{
                        style: {
                            filter: "invert(90%) sepia(84%) saturate(200%) hue-rotate(270deg) brightness(206%) contrast(101%)"
                        }
                    }}
                />
            </Box>

            {openResult ? (
                <Button onClick={handleLeave} sx={{ zIndex: 1000000 }}>
                    Sair
                </Button>
            ) : (
                <Button onClick={handleSpinButton} disabled={disableButton}>
                    {loading ? <CircularProgress size={"1.68rem"} color="secondary" /> : "Girar roleta"}
                </Button>
            )}
            <Result open={openResult} prize={prize ? (prize == 1 ? "Caneca" : "Produtos Bongrano") : ""} />
        </Box>
    )
}
