import axios from 'axios';
import config from './config';

export const api = axios.create({
    withCredentials: true,
    baseURL: config.baseURL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});