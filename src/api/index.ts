import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:4107/api",
})

const signup = async (values: Form) => {
    const response = (await api.post("/signup", values)).data
    return response
}

export default { signup }
