import { House } from "@/entities/house";
import axios from "axios";

const API_URL = "http://mobile-reality-backend.sadek.usermd.net";
const resource = "houses";

class HouseService {
  getHouse(id: string) {
    return axios.get<{ result: House }>(`${API_URL}/${resource}/${id}`);
  }

  getAllHouses() {
    return axios.get<{ results: House[] }>(`${API_URL}/${resource}/all`);
  }

  createNewHouse(payload: House) {
    return axios.post(`${API_URL}/${resource}`, payload);
  }

  deleteHouse(id: string) {
    return axios.delete(`${API_URL}/${resource}/${id}`);
  }
}

export default new HouseService();
