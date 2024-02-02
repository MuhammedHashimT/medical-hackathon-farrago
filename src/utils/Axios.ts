import axios from "axios";

const Axios = axios.create({
  // baseURL: "http://localhost:5000/api/" ,
  baseURL: "https://medical-hackathon-server.vercel.app/api/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
  },
  withCredentials: true,
});

export default Axios;
