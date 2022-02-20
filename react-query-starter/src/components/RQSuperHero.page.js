import React from "react";
import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

const RQSuperHero = () => {
  const { heroId } = useParams();
  const { isLoading, data, isError, error, isFetching } =
    useSuperHeroData(heroId);
  if (isLoading) return <h2>Loading...</h2>;
  return (
    <div>
      <h2>RQ Super Hero Page</h2>
      <div>
        {data?.data.name} - {data?.data.alterEgo}
      </div>
    </div>
  );
};

export default RQSuperHero;
