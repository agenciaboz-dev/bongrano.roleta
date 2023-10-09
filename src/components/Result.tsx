import React from "react"
import { Box, Dialog, alpha } from "@mui/material"
import { colors } from "../style/colors"

interface ResultProps {
    open: boolean
    prize: string
}

export const Result: React.FC<ResultProps> = ({ open, prize }) => {
    return (
        <Dialog
            open={open}
            sx={{ width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center" }}
            PaperProps={{ sx: {
                            // bgcolor: alpha(colors.primary, 0.7),
                            backgroundImage: `linear-gradient(${colors.gradient.primary}, ${colors.gradient.secondary})`,
                            borderRadius: "5vw"
                        } }}
            hideBackdrop
            disableEscapeKeyDown
        >
            <Box sx={{ flexDirection: "column", padding: "5vw 1vw", width: "90vw", textAlign: "center", fontSize: "6vw", fontWeight: "bold" }}>
                {prize ? (
                    <>
                        <p>Parabéns!</p>
                        <p>Você ganhou</p>
                        <p>{prize}</p>
                        <p>Obrigado por participar!</p>
                    </>
                ) : (
                    <>
                        <p>Ops! Que pena!</p>
                        <p>Não foi dessa vez!</p>
                    </>
                )}
            </Box>
        </Dialog>
    )
}
