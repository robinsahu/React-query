import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:3004/users/${email}`);
};

const fetchTechByProfile = (name) => {
  return axios.get(`http://localhost:3004/profile/${name}`);
};

export const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );
  const name = user?.data?.name;
  useQuery(["tech", name], () => fetchTechByProfile(name), {
    enabled: !!name,
  });
  return <div>DependentQueries</div>;
};
