import useSWR from "swr";
import axios from "axios";

export default async function GetDistrictsAPI(provID) {
  
  let query;
  provID ? query = `?province_id=${provID}` : query = ''
  
  try {
    const dis = await axios.get(`/api/districts${query}`)
    const disResult = dis.data
    // console.log(disResult)
    
    return [disResult]
  } catch (error) {
    return error
  }
}