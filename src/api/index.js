import axios from "axios";

export const getFiles = (offset, limit) => {
  return axios.get(`https://fixed-plantation-production.up.railway.app/api/v1/files?offset=${offset}&limit=${limit}`)
    .then((res) => res.data)
    .catch((error) => console.log(error.message))
}

export const getWhitSearch = (searchTerm, offset, limit) => {
  return axios.get(`https://fixed-plantation-production.up.railway.app/v1/files/search?searchvalue=${searchTerm}&offset=${offset}&limit=${limit}`)
    .then((res) => res.data)
    .catch((error) => console.log(error.message))
}
