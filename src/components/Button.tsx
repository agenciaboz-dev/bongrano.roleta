import React from "react"
import { ButtonProps, Button as MuiButton } from "@mui/material"

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <MuiButton {...props} sx={{ ...props.sx, borderRadius: "10vw", fontSize: "5vw", fontWeight: "bold" }} variant={props.variant || "contained"}>
            {props.children}
        </MuiButton>
    )
}
