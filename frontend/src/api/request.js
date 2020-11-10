import axios from 'axios'

const service = axios.create({
    baseURL: 'http://172.16.13.155:7000',
    timeout: 3000
})

export default service