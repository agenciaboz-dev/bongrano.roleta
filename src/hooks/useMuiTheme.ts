import { createTheme } from "@mui/material"
import { colors } from "../style/colors"
// import { useMemo } from "react"

export const useMuiTheme = () => {
    const THEME = createTheme({
        typography: {
            fontFamily: ["Montserrat"].join(","),
        },
        palette: {
            primary: {
                main: colors.primary,
            },
            secondary: {
                main: colors.secondary,
            },

            text: {
                primary: colors.text.primary,
                secondary: colors.text.secondary,
            },
        },
    })

    return THEME
}
