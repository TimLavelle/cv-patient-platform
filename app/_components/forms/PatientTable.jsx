import Link from 'next/link'
const patient = [
  { number: '1854', familyName: 'Lavelle', givenName: 'Tim', age: '41' },
  { number: '781', familyName: 'Lavelle', givenName: 'Judy', age: '41' }
]

export function PatientTable() {
  return (
    <div>
      <div className="mt-8 sm:flex sm:items-center">
        <div className="mt-4 sm:mt-0 sm:flex-none">
          <Link href="/registration" className="font-medium text-blue-600 hover:underline">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Register new Patient
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Patient #
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Family Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Given Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Age
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6 text-left">
                      Additional Forms
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {patient.map((px, pIdx) => (
                    <tr key={px.number} className={pIdx % 2 === 0 ? undefined : 'bg-gray-50'}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{px.number}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{px.familyName}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{px.givenName}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{px.age}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6">
                        Print: Registration Form | Complete: Optom | Refration | GP | Surgery
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
