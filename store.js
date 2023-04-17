import create from 'zustand';
import { fetcher } from './api';
import useSWR from 'swr';

const useStore = create((set) => ({
  state: [],
  isLoading: true,
  error: null,
  setStates: (states) => set({ states }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));

export const useStates = () => {
  const { data: states, error } = useSWR('https://servicodados.ibge.gov.br/api/v1/localidades/estados', fetcher);
  const setStates = useStore((state) => state.setStates);
  const setLoading = useStore((state) => state.setLoading);
  const setError = useStore((state) => state.setError);

  if (error) {
    setLoading(false);
    setError(error);
    return { states: [], isLoading: false, error };
  }

  if (states) {
    setStates(states);
    setLoading(false);
    setError(null);
    return { states, isLoading: false, error: null };
  }

  setLoading(true);
  return { states: [], isLoading: true, error: null };
};

export default useStore;