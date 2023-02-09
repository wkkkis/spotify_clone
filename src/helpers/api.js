import axios from "axios";
import { URL } from "../utils/constants";

export const instance = axios.create({
    baseURL: URL,
    params: {key: '484129036', locale: 'en-US'},
    headers: {
        'X-RapidAPI-Key': 'eae1bfd126msh0f1d584c7e22373p13c3c4jsn43b19b1b06ee',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
})