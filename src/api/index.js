import axios from "axios";

export const getFiles = () => {
  return axios.get(`http://localhost:3000/api/v1/files`)
    .then((res) => res.data)
    .catch((error) => console.log(error.message))
}