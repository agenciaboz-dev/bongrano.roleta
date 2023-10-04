import axios from "axios"

const api = axios.create({
    baseURL: "localhost",
})

const signup = async (values: Form) => {
    const response = await api.post("/signup", values)
}

export default {}
