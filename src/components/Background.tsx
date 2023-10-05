import React from "react"
import { Box } from "@mui/material"
import backgroundImage from "../assets/images/background.webp"
import confettiImage from "../assets/images/confetti.webp"
import logoImage from "../assets/images/logo.webp"

interface BackgroundProps {
    children: React.ReactNode
}

export const Background: React.FC<BackgroundProps> = ({ children }) => {
    return (
        <Box
            sx={{
                flexDirection: "column",
                width: "100vw",
                height: "100vh",
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                alignItems: "center",
                paddingTop: "20vw",
                zIndex: -10,
                overflowY: "hidden",
            }}
        >
            <img
                src={confettiImage}
                alt="confetti"
                style={{ position: "absolute", width: "100vw", height: "100%", top: "5vw", objectFit: "fill", zIndex: -1 }}
            />
            <img src={logoImage} alt="logo" style={{ width: "50vw" }} />
            {children}
        </Box>
    )
}
