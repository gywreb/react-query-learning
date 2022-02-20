import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const getSuperHeroes = async () => {
  return await axios.get("http://localhost:4000/superheroes");
};

const getFriends = async () => {
  return await axios.get("http://localhost:4000/friends");
};

const ParallelqueriesPage = () => {
  const { data: superheroes } = useQuery("super-heroes", getSuperHeroes);
  const { data: friends } = useQuery("friends", getFriends);
  return <div>Parallel Page</div>;
};

export default ParallelqueriesPage;
