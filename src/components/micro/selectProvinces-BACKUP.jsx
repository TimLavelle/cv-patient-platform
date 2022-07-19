import { useEffect, useState } from 'react'

export async function Provinces() {
  const [provinces, setProvinces] = useState({});

  useEffect(() => {
    async function getProvinces() {
      const response = await fetch('http://localhost:3000/api/provinces')
      const body = await response.json()
      setProvinces(body.message.map(({ prov_id, prov_name }) => ({ id: prov_id, prov_name: prov_name })))
    }
    getProvinces();
  }, [])

  return (
    <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
      {provinces.map(({ id, prov_name }) => (
        <option key={id} value={id}>
          {prov_name}
        </option>
      ))}
    </select>
  )
}