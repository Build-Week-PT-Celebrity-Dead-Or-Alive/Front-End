import axios from 'axios';

export function getToken() {
  return localStorage.getItem("token")
}

export default function () {
  return axios.create({
    baseURL: "http://celeb-death-status.herokuapp.com/api",
    headers: {
      Authorization: getToken(),
    }
  })
}
