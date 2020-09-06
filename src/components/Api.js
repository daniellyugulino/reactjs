import Axios from 'axios'

const api = Axios.create({
    baseURL: 'https://swapi.dev/api/people/?search=Luke'
})

export default api