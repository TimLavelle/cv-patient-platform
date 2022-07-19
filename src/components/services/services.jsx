import useSWR from "swr";
import axios from "axios";

function getProvincesAPI() {

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR('/api/provinces', fetcher);

  return {
    provinces: data,
    isLoading: !error && !data,
    isError: error
  }
}