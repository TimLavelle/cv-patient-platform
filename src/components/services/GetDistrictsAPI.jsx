import useSWR from "swr";
import axios from "axios";

export function GetDistrictsAPI(provID) {
  
  let query;
  provID ? query = `?province_id=${provID}` : query = ''
  
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(`/api/districts${query}`, fetcher);
  
  return [data]
}