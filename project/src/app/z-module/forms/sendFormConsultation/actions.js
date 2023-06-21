"use server";
import axios from "axios";

const apiMAIL = {
  baseURL: "http://localhost:7721/",
  // baseURL: 'https://larux.ru:7721/',

  headers: {
    Authorization: `Bearer 9`,
  },
};
const url = `/sendFormConsultationZOV`;

export async function send(data) {
  console.log(data);
  await axios.post(url, data, apiMAIL);
}
