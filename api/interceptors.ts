import axios from "axios";
import { cookies } from "next/headers";

const API_URL = process.env.API_URL 

const $api = axios.create({
    baseURL: API_URL,
})

const $apiAuth = axios.create({
    baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
    const accessToken = cookies().get("token")
    if(config.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
})


export  {$api,$apiAuth}

