import useSWR from "swr";
import axios from "axios";

export default function GetProvincesAPI() {

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR('/api/provinces', fetcher);

  return [data]
}