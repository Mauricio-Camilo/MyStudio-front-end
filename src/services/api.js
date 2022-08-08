import axios from "axios";

export const api = axios.create({
    baseURL: "https://mauricio-mystudio.herokuapp.com" //deploy
    // baseURL: "http://localhost:5000"
  });

  export const makeSignUp = async (formData) => {
    await api.post("/signup", formData);
  };

  export const makeLogin = async (formData) => {
    const token = await api.post("/signin", formData);
    return token
  };

  export const postClient = async (formData, config) => {
    await api.post("/clients", formData, config);
  }