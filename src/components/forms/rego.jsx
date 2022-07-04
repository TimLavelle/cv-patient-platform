import { Fragment, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PXNumber } from '@/components/micro/InputPXNumber'
import { ExclamationCircleIcon, CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Listbox, Transition } from '@headlessui/react'

const genders = [
  { id: 0, name: 'Please choose a gender' },
  { id: 1, name: 'Child' },
  { id: 2, name: 'Female' },
  { id: 3, name: 'Male' },
  { id: 4, name: 'Prefer not to answer' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function RegForm() {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(genders[0])
  
  return (
    <>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {t('forms.rego.px.label')}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
              {t('forms.rego.px.details')}
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <PXNumber />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                          <>
                            <Listbox.Label className="block text-sm font-medium text-gray-700">{t('forms.rego.fields.px.gender')}</Listbox.Label>
                            <div className="mt-1 relative">
                              <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <span className="block truncate">{selected.name}</span>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                  <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                              </Listbox.Button>

                              <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                  {genders.map((gen) => (
                                    <Listbox.Option
                                      key={gen.id}
                                      className={({ active }) =>
                                        classNames(
                                          active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                          'cursor-default select-none relative py-2 pl-3 pr-9'
                                        )
                                      }
                                      value={gen}
                                    >
                                      {({ selected, active }) => (
                                        <>
                                          <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                            {gen.name}
                                          </span>

                                          {selected ? (
                                            <span
                                              className={classNames(
                                                active ? 'text-white' : 'text-indigo-600',
                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                              )}
                                            >
                                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                              <div className="absolute inset-y-0 right-0 pr-8 flex items-center pointer-events-none">
                                <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                              </div>
                            </div>
                          </>
                        )}
                      </Listbox>
                      <p className="mt-2 text-sm text-red-600" id="pxnum-error">
                        {t('forms.rego.fields.px.genderError')}
                      </p>
                    </div>

                    <div className="col-span-6">
                      <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                          <div className="border-t border-gray-200" />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="familyName" className="block text-sm font-medium text-gray-700">
                        {t('forms.rego.fields.px.familyName')}
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <div className="relative flex items-stretch flex-grow focus-within:z-10">
                          <input
                            type="text"
                            name="familyName"
                            id="familyName"
                            autoComplete="address-level2"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-red-600" id="pxnum-error">
                      {t('forms.rego.fields.px.familyNameError')}
                      </p>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="givenName" className="block text-sm font-medium text-gray-700">
                        {t('forms.rego.fields.px.givenName')}
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <div className="relative flex items-stretch flex-grow focus-within:z-10">
                          <input
                            type="text"
                            name="givenName"
                            id="givenName"
                            autoComplete="address-level2"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-red-600" id="pxnum-error">
                        {t('forms.rego.fields.px.givenNameError')}
                      </p>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="pxage" className="block text-sm font-medium text-gray-700">
                      {t('forms.rego.fields.px.age')}
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <div className="relative flex items-stretch flex-grow focus-within:z-10">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          </div>
                          <input
                            type="number"
                            name="pxage"
                            id="pxage"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                            aria-invalid="true"
                            aria-describedby="pxnum-error"
                            minLength="4"
                            maxLength="4"
                            placeholder={t('forms.rego.fields.px.numberPlaceHolder')}
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-red-600" id="pxnum-error">
                        {t('forms.rego.fields.px.ageError')}
                      </p>
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
