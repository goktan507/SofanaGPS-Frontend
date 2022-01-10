import axios from "axios"

export default axios.create({
    baseURL: 'https://sofanagpsapi.azurewebsites.net/api'
});