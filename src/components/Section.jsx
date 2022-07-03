import { Container } from '@/components/Container'
import { MissionYear } from '@/components/micro/missionYear'
import Link from 'next/link'

export function Section() {
  return (
    <Container>
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="text-base mx-auto">
          <h1>
          <span className="block text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Cambodia Vision - <MissionYear /> Mission
          </span>
          <span className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Registraion
          </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            Welcome to the Cambodia Vision Patient Registration and Digital Form Library. Below you’ll find a link to the registration form that needs to filled in. Here you can upload a photo and capture all the necessary information for other subsequent forms.
          </p>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            To begin the patient registration process, please fill-in the <Link href="/registration" className="font-medium text-blue-600 hover:underline">New Patient Registration Form</Link>
          </p>
        </div>
        <div className="mt-6 text-gray-500 mx-auto">
          <h2>
            <span className="mt-2 block text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              Existing patients records
            </span>
          </h2>
          <p className='mt-8 text-xl text-gray-500 leading-8'>
            Below is the list of existing patients in the 2016 patient database. Please use the <span className="font-bold">Patient Number</span> when looking for their records and forms to fill out. If you need to fill out an additional form for the patient, these forms will be available after you have found your patient record on the search below.
          </p>
          <p className='mt-8 text-xl text-gray-500 leading-8'>
            These are the current forms available: <span className="font-bold">Registration, Medical Assessment</span>
          </p>
        </div>
      </div>
    </Container>
  )
}
  