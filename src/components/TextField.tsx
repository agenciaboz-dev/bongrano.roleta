import React from "react"
import { Box, TextField as MuiText, TextFieldProps } from "@mui/material"

export const TextField: React.FC<TextFieldProps> = (props) => {
    return (
        <MuiText
            {...props}
            InputProps={{ ...props.InputProps, sx: { ...props.InputProps?.sx, bgcolor: "white" } }}
            autoComplete="off"
            InputLabelProps={{ sx: { bgcolor: "white", borderRadius: "2vw" } }}
        />
    )
}
