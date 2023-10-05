import React from "react"
import { Route, Routes as ReactRoutes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { Home } from "./Screens/Home"
import { Signup } from "./Screens/Signup"
import { Validation } from "./Screens/Validation"
import { Roulette } from "./Screens/Roulette"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    return (
        <BrowserRouter>
            <ReactRoutes>
                <Route index element={<Home />} />
                <Route path="signup" element={<Signup />} />
                <Route path="validation" element={<Validation />} />
                <Route path="roulette" element={<Roulette />} />
            </ReactRoutes>
        </BrowserRouter>
    )
}
