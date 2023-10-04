import React from "react"
import { Box, TextField as MuiText, TextFieldProps } from "@mui/material"

export const TextField: React.FC<TextFieldProps> = (props) => {
    return <MuiText {...props} InputProps={{ ...props.InputProps, sx: { ...props.InputProps?.sx, bgcolor: "white" } }} />
}
