import "./App.css"
import { ThemeProvider } from "@mui/material"
import { Routes } from "./Routes"
import { useMuiTheme } from "./hooks/useMuiTheme"

const App = () => {
    const theme = useMuiTheme()

    return (
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
    )
}

export default App
