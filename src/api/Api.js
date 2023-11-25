import axios from 'axios'; 

const base_url = "http://192.168.135.173:8000/";

const http = axios.create({
    baseURL: base_url,
})

export const Api = {
    getFilial: () => http.get('filial/'),
    getTypeOperation: () => http.get('operation-list/'),
    postBook: (data) => http.post("ticket-create/", data),
}

export default Api;