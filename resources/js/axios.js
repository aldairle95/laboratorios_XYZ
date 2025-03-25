import axios from "axios";
import router from "./router"; // Importa el router

axios.defaults.baseURL = "http://127.0.0.1:8000/api"; // Ajusta según tu backend
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      console.log("No autenticado, redirigiendo a login...");
      router.push({ name: "login" }); // Redirige a la ruta login
    }
    return Promise.reject(error);
  }
);

export default axios;
