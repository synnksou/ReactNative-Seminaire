import { useQuery } from "react-query";

async function fetchData() {
  const res = await fetch(`https://swapi.dev/api/starships/`);
  const json = await res.json();
  return json;
}

export function useStarships() {
  return useQuery(["starships"], fetchData);
}
