import axios from "axios"

const axiosInstanceAdmin = axios.create({
    baseURL:`${import.meta.env.VITE_PUBLIC_API_URL}/api/admin`
  
})

export {axiosInstanceAdmin};