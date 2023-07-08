import useSWR from "swr";
import axios from "axios";

export default async function GetDistrictsAPI(provID) {

  let query;
  provID ? query = `?province_id=${provID}` : query = ''

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(`/api/districts${query}`, fetcher);
  console.log('Get Districts called', data)

  return data
}