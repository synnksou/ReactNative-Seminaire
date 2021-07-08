import { useQuery } from "react-query";

async function fetchData(id: any) {
  const res = await fetch(`https://swapi.dev/api/starships/${id}/`);
  const json = await res.json();
  console.log({ json });
  return json;
}

export function useStarshipsDetails(id: any) {
  return useQuery(["starshipsDetail", id], () => fetchData(id));
}
