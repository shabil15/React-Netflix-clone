import axios from "axios";
import { BasrUrl } from "./constants/constants";
const instance = axios.create({
    baseURL: BasrUrl,
});

 export default instance

