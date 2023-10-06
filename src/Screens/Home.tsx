import React from "react"
import { Box } from "@mui/material"
import rouletteImage from "../assets/images/roulette.webp"
import breadsImage from "../assets/images/breads.webp"
import breads2Image from "../assets/images/breads2.webp"
import { colors } from "../style/colors"
import { useNavigate } from "react-router-dom"
import { Background } from "../components/Background"

interface HomeProps {}

const Text: React.FC<{ text: string }> = ({ text }) => (
    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">
        <text x="5%" y="20%" fill="white" stroke="red" strokeWidth="0.5" fontSize="2.5vw">
            {text}
        </text>
    </svg>
)

export const Home: React.FC<HomeProps> = ({}) => {
    const navigate = useNavigate()

    return (
        <Box
            sx={{
                overflow: "hidden"
            }}
        >
            <Background>
                <img src={rouletteImage} alt="roulette" style={{ marginBottom: "auto", width: "360px" }} />

                <p
                    style={{
                        color: `${colors.text.primary}`,
                        fontSize: "6vw",
                        fontWeight: "700",
                        textAlign: "center",
                        marginTop: "-30vw",
                        marginBottom: "auto",
                        marginLeft: "5vw",
                        marginRight: "5vw",
                        lineHeight: "8vw",
                        zIndex: "2",
                        textShadow: "-1px -1px 0 white, 0 -1px 0 white, 1px -1px 0 white, 1px 0 0 white, 1px 1px 0 white, 0 1px 0 white, -1px 1px 0 white, -1px 0 0 white"
                    }}
                >
                    Tenha a chance de passar mais um dia com a Bongrano!
                </p>

                <img src={breadsImage} alt="breads1" style={{ width: "100vw", position: "absolute", bottom: "-20vw", zIndex: 1 }} />
                <img src={breads2Image} alt="breads2" style={{ width: "60vw", position: "absolute", bottom: "-25vw", zIndex: 1 }} />
            </Background>
            <Box
                sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 10, width: "100vw", height: "100vh", overflowY: "hidden" }}
                onClick={() => navigate("/signup")}
            ></Box>
        </Box>
    )
}
