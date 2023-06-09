import axios from 'axios';
import { z } from 'zod';
import MMKV from 'react-native-mmkv-storage';

const UF = z.object({
  id: z.number(),
  nome: z.string(),
  sigla: z.string(),
});

const fetchStates = async () => {
  const cachedData = MMKV.getMap('states');
  if (cachedData) {
    return cachedData;
  }
  const { data } = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  UF.array().parse(data);
  MMKV.setMap('states', data);
  return data;
};

// Adicionando o interceptor
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export const fetcher = (url) => axios.get(url).then((res) => res.data);

export default fetchStates;
