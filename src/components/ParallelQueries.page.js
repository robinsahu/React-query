import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:3004/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:3004/friends");
};

export const ParallelQueriesPage = () => {
  useQuery("super-heroes", fetchSuperHeroes);
  useQuery("friends", fetchFriends);
  //   console.log(superHeroes, friends);
  return <div>Parallel Queries</div>;
};
