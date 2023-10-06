import axios from "axios"

const api = axios.create({
    baseURL: "https://app.agenciaboz.com.br:4107/api",
    // baseURL: "http://192.168.15.32:4107/api",
})

const signup = async (values: Form) => {
    const response = (await api.post("/signup", values)).data
    return response
}

const roulette = async (user: User) => {
    const response = (await api.post("/roulette", user)).data
    return response
}

export default { signup, roulette }
