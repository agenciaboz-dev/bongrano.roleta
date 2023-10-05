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
        <>
            <Background>
                <img src={rouletteImage} alt="roulette" style={{ width: "100vw" }} />

                <p
                    style={{
                        color: "white",
                        fontSize: "8vw",
                        textShadow: `2px 2px 0 ${colors.text.secondary}`,
                        textAlign: "center",
                        marginLeft: "5vw",
                        marginRight: "5vw",
                        lineHeight: "12vw",
                    }}
                >
                    Tenha a chance de passar mais um dia com a Bongrano!
                </p>

                <img src={breadsImage} alt="breads1" style={{ width: "100vw", position: "absolute", bottom: "-15vw", zIndex: 1 }} />
                <img src={breads2Image} alt="breads2" style={{ width: "60vw", position: "absolute", bottom: "-15vw", zIndex: 1 }} />
            </Background>
            <Box
                sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 10, width: "100vw", height: "100vh", overlowY: "hidden" }}
                onClick={() => navigate("/signup")}
            ></Box>
        </>
    )
}
