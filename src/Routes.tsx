import React from "react"
import { Route, Routes as ReactRoutes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { Home } from "./Screens/Home"
import { Signup } from "./Screens/Signup"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    return (
        <BrowserRouter>
            <ReactRoutes>
                <Route index element={<Home />} />
                <Route path="signup" element={<Signup />} />
            </ReactRoutes>
        </BrowserRouter>
    )
}
