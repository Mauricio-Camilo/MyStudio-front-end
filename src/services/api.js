import axios from "axios";


export const api = axios.create({
    // baseURL: "https://linkr-driven-api.herokuapp.com" //deploy
    baseURL: "http://localhost:5000"
  });

  export const makeSignUp = async (formData) => {
    await api.post("/signup", formData);
  };

  export const makeLogin = async (formData) => {
    const token = await api.post("/signin", formData);
    return token
  };