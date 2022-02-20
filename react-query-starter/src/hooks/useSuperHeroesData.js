import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

const SUPER_HEROES_API_KEY = "super-heroes";

const getSuperHeroes = async () => {
  return await axios.get("http://localhost:4000/superheroes");
};

const addSuperHero = async (hero) => {
  return await axios.post("http://localhost:4000/superheroes", hero);
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery(SUPER_HEROES_API_KEY, getSuperHeroes, {
    onError,
    onSuccess,
    // select: (data) => {
    //   const superheroesNames = data.data.map((hero) => hero.name);
    //   return superheroesNames;
    // },
  });
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries(SUPER_HEROES_API_KEY);
      queryClient.setQueryData(SUPER_HEROES_API_KEY, (prevQueryData) => {
        return {
          ...prevQueryData,
          data: [...prevQueryData.data, data.data],
        };
      });
    },
  });
};
