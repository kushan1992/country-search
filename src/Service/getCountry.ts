import axios from "axios";

const COUNTRY_API_URL = "https://restcountries.com/v3.1/name";

export function getCountry(userInput: string) {
    return axios.get(`${COUNTRY_API_URL}/${userInput}`).then(response => response.data).catch(error => console.error(error));
}