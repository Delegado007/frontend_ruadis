import axios from "axios";

export const getFiles = () => {
  // console.log(limit)
  // if (limit) {
  //   return axios.get(`http://localhost:3000/api/v1/files?limit=${limit}&offset=${offset}`)
  //     .then((res) => res.data)
  //     .catch((error) => console.log(error.message))
  // }
  return axios.get(`http://localhost:3000/api/v1/files`)
    .then((res) => res.data)
    .catch((error) => console.log(error.message))
}