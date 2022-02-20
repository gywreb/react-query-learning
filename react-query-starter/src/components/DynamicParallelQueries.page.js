import axios from "axios";
import React from "react";
import { useQueries } from "react-query";

const getSuperHeroById = async (heroId) => {
  return await axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const DynamicparallelqueriesPage = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => getSuperHeroById(id),
      };
    })
  );
  console.log({ queryResults });
  return <div>Dynamic Parallel Page</div>;
};

export default DynamicparallelqueriesPage;
