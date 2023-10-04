import React from "react"
import { Route, Routes as ReactRoutes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { Home } from "./Screens/Home"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    return (
        <BrowserRouter>
            <ReactRoutes>
                <Route index element={<Home />} />
            </ReactRoutes>
        </BrowserRouter>
    )
}
