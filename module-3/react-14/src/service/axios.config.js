import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_AUTH_BASE_URL,
    timeout: 3600*24,
    headers: {'Content-Type': 'application/json'}
});



export const req = axios.create({
    baseURL:import.meta.env.VITE_JSONP_BASE_URL,
    timeout: 3600*24,
    headers: {'Content-Type': 'application/json'}
});

export const lead = axios.create({
    baseURL: import.meta.env.VITE_LEADS_BASE_URL,
    timeout: 3600*24,
    headers: {'Content-Type': 'application/json'}
});
