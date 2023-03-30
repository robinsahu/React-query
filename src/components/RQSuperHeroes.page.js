import { useQuery } from "react-query";
import axios from "axios";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";
//pattern that is followed by react-query
// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:3004/superheroes");
// };

export const RQSuperHeroesPage = () => {
  // const [name, setName] = useState("");
  // const [alterEgo, setAlterEgo] = useState("");

  const onSuccess = (data) => {
    console.log("Perform sideeffect onSuccess", data);
  };

  const onError = (data) => {
    console.log("Perform sideeffect onError");
  };

  const { data, isLoading, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  console.log({ isLoading });

  // console.log({ isLoading }, { isFetching });

  // const { mutate: addHero } = useAddSuperHeroData()

  // const handleAddHeroClick = () => {
  //   const hero = { name, alterEgo }
  //   addHero(hero)
  // }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page </h2>
      {/* <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div> */}
      <button onClick={refetch}>Fetch heroes</button>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}

      {/* {data?.data.map((hero) => {
        return (
          <div>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })} */}
    </>
  );
};
