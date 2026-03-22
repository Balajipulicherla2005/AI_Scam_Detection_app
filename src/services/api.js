import axios from "axios"

export const checkScam = async(message)=>{
    const res = await axios.post("http://localhost:5000/api/check",{
        message
    })
    return res.data
}