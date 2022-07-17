import { Fragment, useState, React } from 'react'
import { Formik, Form, Field, ErrorMessage, formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next'
import { ExclamationCircleIcon, CheckIcon, SelectorIcon, UsersIcon, BadgeCheckIcon } from '@heroicons/react/solid'
import { Listbox, Transition } from '@headlessui/react'

const genders = [
  { id: "", name: 'Please choose a gender' },
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

  const registrationSchema = Yup.object().shape({
    pxnumber: Yup.string()
      .min(4, t('forms.rego.fields.px.numberLength'))
      .max(4, t('forms.rego.fields.px.numberLength'))
      .required(t('forms.rego.fields.px.numberError')),

    familyName: Yup.string()
      .required(t('forms.rego.fields.px.familyNameError')),

    pxgender: Yup.string()
      .required(t('forms.rego.fields.px.genderError')),

    givenName: Yup.string()
      .required(t('forms.rego.fields.px.givenNameError')),

    pxage: Yup.string()
      .required(t('forms.rego.fields.px.ageError')),

    mobile: Yup.number()
      .positive('forms.rego.fields.px.mobile.Error')
  })

  const getProvinces = async () => {
    const response = await fetch('http://localhost:3000/api/provinces');
    const provinces = await response.json();
    console.log(provinces);
  }

  let provOptions = []

  return (
    <>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <Formik
        initialValues={{
          pxnumber: '',
          pxgender: '0',
          familyName: '',
          givenName: '',
          pxage: '',
          mobile: '',
          province: '',
          district: '',
          village: ''
        }}
        validationSchema={registrationSchema}

        onSubmit={async (values, setSubmitting, isSubmitting, isValidating) => {
          let pxgender = document.getElementById('pxgender').value;
          const payload = {
            ...values,
            pxgender
          }

          console.log('Registration form submitted...', payload);
        }}
      >
        {({ errors, touched }) => (
          <Form>
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
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="pxnumber" className="block text-sm font-medium text-gray-700">
                            {t('forms.rego.fields.px.number')}
                            <BadgeCheckIcon className="h-5 w-5 text-blue-500 pl-1 inline" aria-hidden="true" />
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <div className="relative flex items-stretch flex-grow focus-within:z-10">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /></div>
                              <Field
                                type="number"
                                name="pxnumber"
                                id="pxnumber"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
                                placeholder={t('forms.rego.fields.px.numberPlaceHolder')}
                              />
                              {errors.pxnumber && touched.pxnumber &&
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                                </div>
                              }
                            </div>
                          </div>
                          <p className="mt-2 text-sm text-gray-500" id="email-description">
                            {t('forms.rego.fields.px.numberHint')}
                          </p>
                          {errors.pxnumber && touched.pxnumber &&
                            <ErrorMessage
                              name="pxnumber"
                              component="p"
                              className="mt-2 text-sm text-red-600"
                            />
                          }
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <Listbox name='genderSelect' value={selected.id} onChange={setSelected}>
                            {({ open }) => (
                              <>
                                <Listbox.Label className="block text-sm font-medium text-gray-700">{t('forms.rego.fields.px.gender')} <BadgeCheckIcon className="h-5 w-5 text-blue-500 pl-1 inline" aria-hidden="true" /></Listbox.Label>
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
                                </div>
                              </>
                            )}
                          </Listbox>
                          <Field type="hidden" name="pxgender" id="pxgender" value={selected.name} onChange={setSelected} />

                          {errors.pxgender &&
                            <ErrorMessage
                              name="pxgender"
                              component="p"
                              className="mt-2 text-sm text-red-600"
                            />
                          }
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
                            {t('forms.rego.fields.px.familyName')} <BadgeCheckIcon className="h-5 w-5 text-blue-500 pl-1 inline" aria-hidden="true" />
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <div className="relative flex items-stretch flex-grow focus-within:z-10">
                              <Field
                                type="text"
                                name="familyName"
                                id="familyName"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              {errors.familyName && touched.familyName &&
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                                </div>
                              }
                            </div>
                          </div>
                          {errors.familyName && touched.familyName &&
                            <p className="mt-2 text-sm text-red-600" id="pxnum-error">
                              {t('forms.rego.fields.px.familyNameError')}
                            </p>
                          }
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label htmlFor="givenName" className="block text-sm font-medium text-gray-700">
                            {t('forms.rego.fields.px.givenName')} <BadgeCheckIcon className="h-5 w-5 text-blue-500 pl-1 inline" aria-hidden="true" />
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <div className="relative flex items-stretch flex-grow focus-within:z-10">
                              <Field
                                type="text"
                                name="givenName"
                                id="givenName"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              {errors.givenName && touched.givenName &&
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                                </div>
                              }
                            </div>
                          </div>
                          {errors.givenName && touched.givenName &&
                            <p className="mt-2 text-sm text-red-600" id="pxnum-error">
                              {t('forms.rego.fields.px.givenNameError')}
                            </p>
                          }
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label htmlFor="pxage" className="block text-sm font-medium text-gray-700">
                            {t('forms.rego.fields.px.age')} <BadgeCheckIcon className="h-5 w-5 text-blue-500 pl-1 inline" aria-hidden="true" />
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <div className="relative flex items-stretch flex-grow focus-within:z-10">
                              <Field
                                type="number"
                                name="pxage"
                                id="pxage"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                              />
                              {errors.pxage && touched.pxage &&
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                                </div>
                              }
                            </div>
                          </div>
                          {errors.pxage && touched.pxage &&
                            <p className="mt-2 text-sm text-red-600" id="pxnum-error">
                              {t('forms.rego.fields.px.ageError')}
                            </p>
                          }
                        </div>

                        <div className="col-span-6">
                          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                            {t('forms.rego.fields.px.mobile')}
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <div className="relative flex items-stretch flex-grow focus-within:z-10">
                              <Field
                                type="number"
                                name="mobile"
                                id="mobile"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              {errors.number && touched.number &&
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                                </div>
                              }
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                  <div className="border-t border-gray-200" />
                </div>
              </div>
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      {t('forms.rego.px.addressLabel')}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {t('forms.rego.px.addressDetails')}
                    </p>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className='shadow overflow-hidden sm:rounded-md'>
                    <div className='px-4 py-5 bg-white sm:p-6'>
                      <div className='grid grid-cols-6 gap-6'>
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                            {t('forms.rego.fields.px.province')} <BadgeCheckIcon className="h-5 w-5 text-blue-500 pl-1 inline" aria-hidden="true" />
                          </label>
                          <Field
                            type="text"
                            name="province"
                            id="province"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label htmlFor="district" className="block text-sm font-medium text-gray-700">
                            {t('forms.rego.fields.px.district')} <BadgeCheckIcon className="h-5 w-5 text-blue-500 pl-1 inline" aria-hidden="true" />
                          </label>
                          <Field
                            type="text"
                            name="district"
                            id="district"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label htmlFor="village" className="block text-sm font-medium text-gray-700">
                            {t('forms.rego.fields.px.village')} <BadgeCheckIcon className="h-5 w-5 text-blue-500 pl-1 inline" aria-hidden="true" />
                          </label>
                          <Field
                            type="text"
                            name="village"
                            id="village"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}