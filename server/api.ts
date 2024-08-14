import axios from 'axios'

const api = axios.create({
    baseURL: process.env['NUXT_BASE_URL'] + '/api/v1'
})

export default api