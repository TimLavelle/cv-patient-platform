import getProvincesAPI from '../services/services'

export function Provinces() {
  const { provinces, isLoading, isError } = getProvincesAPI();

  if (isLoading) return <p>loading...</p>
  if (isError) return <p>Error...</p>

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