import React from "react"
import { ButtonProps, Button as MuiButton } from "@mui/material"
import { colors } from "../style/colors"

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <MuiButton {...props} variant={props.variant || "contained"}
            sx={{
                ...props.sx,
                color: colors.text.primary,
                borderRadius: "10vw",
                fontSize: "5.5vw",
                fontWeight: "bold",
                textTransform: "capitalize",
                backgroundImage: `linear-gradient(${colors.gradient.primary}, ${colors.gradient.secondary})`
            }}
        >
            {props.children}
        </MuiButton>
    )
}
