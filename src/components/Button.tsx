import React from "react"
import { ButtonProps, Button as MuiButton } from "@mui/material"
import { colors } from "../style/colors"

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <MuiButton {...props} variant={props.variant || "contained"}
            sx={{
                ...props.sx,
                backgroundImage: `linear-gradient(${colors.gradient.primary}, ${colors.gradient.secondary})`,
                color: colors.text.primary,
                borderRadius: "10vw",
                fontFamily: "MADEMellow",
                fontSize: "7vw",
                fontWeight: "bold",
                textTransform: "capitalize",
            }}
        >
            {props.children}
        </MuiButton>
    )
}
