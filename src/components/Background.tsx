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
                paddingTop: "10vw",
                overflow: "hidden",
            }}
        >
            <img
                src={confettiImage}
                alt="confetti"
                style={{ position: "absolute", width: "100vw", height: "95vh", top: "5vw", objectFit: "fill", zIndex: 2 }}
            />
            <img src={logoImage} alt="logo" style={{ width: "50vw" }} />
            {children}
        </Box>
    )
}
