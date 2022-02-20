import { Fragment } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import axios from "axios";

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
};

export const InfiniteQueriesPage = () => {
  const { isLoading, isError, error, data } = useQuery(["colors"], fetchColors);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <div>
        {data?.data.map((color) => {
          return (
            <div key={color.id}>
              <h2 key={color.id}>
                {color.id} {color.label}
              </h2>
            </div>
          );
        })}
      </div>
    </>
  );
};
