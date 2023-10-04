import "./App.css"
import { ThemeProvider } from "@mui/material"
import { Routes } from "./Routes"
import { useMuiTheme } from "./hooks/useMuiTheme"
import { Snackbar, SnackbarProvider } from "burgos-snackbar"

const App = () => {
    const theme = useMuiTheme()

    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider>
                <Snackbar />
                <Routes />
            </SnackbarProvider>
        </ThemeProvider>
    )
}

export default App
