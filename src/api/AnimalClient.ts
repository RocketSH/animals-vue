import axios from 'axios';

export interface Animal {
  country_of_origin: string;
  id: number | string;
  length: number;
  name: string;
  weight: number;
}

interface AnimalIndexResponse {
  data: Animal[];
}

interface AnimalGetResponse {
  data: Animal;
}

const BASE_URL = 'http://localhost:4000/api/animals';

export default class AnimalClient {
  static async listAllAnimals() {
    const { data } = await axios.get<AnimalIndexResponse>(BASE_URL);
    return data.data;
  }

  static async getAnimal(id: number | string) {
    const { data } = await axios.get<AnimalGetResponse>(`${BASE_URL}/${id}`);
    return data.data;
  }
}
