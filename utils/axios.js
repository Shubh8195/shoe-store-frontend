import axios from "axios";
import { API_URL, STRAPI_API_TOKEN } from "./url";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${STRAPI_API_TOKEN}`
}

export const fetchDataFromAPI = async (endpoint, params) => {
    const { data } = await axios.get(API_URL + endpoint, {
        headers,
        params
    })
    return data;
}


export const makePaymentRequest = async (endpoint, payload) => {
    const { data } = await axios.post(API_URL + endpoint, payload, {
        headers
    })
    return data;
}