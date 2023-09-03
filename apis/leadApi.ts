import axios from "axios";

const leadsApi = axios.create({
    baseURL:'/api'
})

export default leadsApi

