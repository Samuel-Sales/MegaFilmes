import axios from 'axios';
import { env } from '../config/env';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

api.interceptors.request.use( async (config) => {
    const defaultEnv = 'production';
    config.headers.Authorization = `Bearer ${env[defaultEnv].theMovieDBToken}`

    return config;
})

export default api;