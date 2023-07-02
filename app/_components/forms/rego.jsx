import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'next-i18next'
import { ExclamationCircleIcon, UsersIcon } from '@heroicons/react/24/solid'
import { CVLabel } from '@/_components/micro/label'
import { CustomListBox } from '@/_components/functional/ListBox'
import DisplayProvinces from '@/_utils/displayProvinces'
import DisplayDistricts from '@/_utils/displayDistricts'

const genders = [
  { id: "", name: 'Please choose a gender' },
  { id: 1, name: 'Child' },
  { id: 2, name: 'Female' },
  { id: 3, name: 'Male' },
  { id: 4, name: 'Prefer not to answer' },
]

export function RegForm() {
  const { t } = useTranslation();

  const [selected, setSelected] = useState(genders[0]);
  const [province, setProvince] = useState({ id: "", name: "" });
  const [districts, setDistricts] = useState({});

  const registrationSchema = Yup.object().shape({
    pxNumber: Yup.string()
      .min(4, t('forms.rego.fields.px.numberLength'))
      .max(4, t('forms.rego.fields.px.numberLength'))
      .required(t('forms.rego.fields.px.numberError')),

    familyName: Yup.string()
      .required(t('forms.rego.fields.px.familyNameError')),

    pxGender: Yup.string()
      .required(t('forms.rego.fields.px.genderError')),

    givenName: Yup.string()
      .required(t('forms.rego.fields.px.givenNameError')),

    pxAge: Yup.string()
      .required(t('forms.rego.fields.px.ageError')),

    pxMobile: Yup.number()
      .positive(t('forms.rego.fields.px.pxMobileError')),

    pxProvince: Yup.number()
      .notOneOf(['0'], t('forms.rego.fields.px.provinceError'))
      .required(t('forms.rego.fields.px.provinceError')),

    pxDistrict: Yup.number()
      .notOneOf(['0'], t('forms.rego.fields.px.districtError'))
      .required(t('forms.rego.fields.px.districtError'))
  })

  return (
    <>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <Formik
        initialValues={{
          pxNumber: '',
          pxGender: '0',
          familyName: '',
          givenName: '',
          pxAge: '',
          pxMobile: '',
          pxProvince: '',
          pxDistrict: '',
          pxVillage: '',
          pxCommune: '',
          pxGPOnly: false,
          pxEyes: false,
          pxEars: false
        }}
        validationSchema={registrationSchema}

        onSubmit={async (values, setSubmitting, isSubmitting, isValidating) => {
          let pxGender = document.getElementById('pxGender').value;
          const payload = {
            ...values,
            pxGender
          }

          console.log('Registration form submitted...', payload);
        }}
      >
        {({ values, errors, touched }) => (
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
                  <div className="overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <CVLabel field='forms.rego.fields.px.number' required='1' />
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <div className="relative flex items-stretch flex-grow focus-within:z-10">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /></div>
                              <Field
                                type="number"
                                name="pxNumber"
                                id="pxNumber"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
                                placeholder={t('forms.rego.fields.px.numberPlaceHolder')}
                              />
                              {errors.pxNumber && touched.pxNumber &&
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                                </div>
                              }
                            </div>
                          </div>
                          <p className="mt-2 text-sm text-gray-500" id="email-description">
                            {t('forms.rego.fields.px.numberHint')}
                          </p>
                          {errors.pxNumber && touched.pxNumber &&
                            <ErrorMessage
                              name="pxNumber"
                              component="p"
                              className="mt-2 text-sm text-red-600"
                            />
                          }
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <CustomListBox
                            listName="genderSelect"
                            listState={selected}
                            changedState={setSelected}
                            listLabel={t('forms.rego.fields.px.gender')}
                            listObject={genders}
                            formikID="pxGender"
                            optionID="id"
                            optionValue="name"
                          />

                          {errors.pxGender &&
                            <ErrorMessage
                              name="pxGender"
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
                          <CVLabel field='forms.rego.fields.px.familyName' required='1' />
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
                          <CVLabel field='forms.rego.fields.px.givenName' required='1' />
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
                          <CVLabel field='forms.rego.fields.px.age' required='1' />
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <div className="relative flex items-stretch flex-grow focus-within:z-10">
                              <Field
                                type="number"
                                name="pxAge"
                                id="pxAge"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                              />
                              {errors.pxAge && touched.pxAge &&
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                                </div>
                              }
                            </div>
                          </div>
                          {errors.pxAge && touched.pxAge &&
                            <p className="mt-2 text-sm text-red-600" id="pxnum-error">
                              {t('forms.rego.fields.px.ageError')}
                            </p>
                          }
                        </div>

                        <div className="col-span-6">
                          <CVLabel field='forms.rego.fields.px.pxMobile' required='1' />
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <div className="relative flex items-stretch flex-grow focus-within:z-10">
                              <Field
                                type="number"
                                name="pxMobile"
                                id="pxMobile"
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
                  <div className='overflow-hidden sm:rounded-md'>
                    <div className='px-4 py-5 bg-white sm:p-6'>
                      <div className='grid grid-cols-6 gap-6'>
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <CVLabel field="forms.rego.fields.px.province" required='1' />
                          <DisplayProvinces callBack={(e) => setProvince({ id: e.id })} onError={touched.pxProvince && errors.pxProvince} />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <CVLabel field="forms.rego.fields.px.district" required='1' />
                          <DisplayDistricts idProvince={province.id} callBack={(e) => setDistricts({ id: e.id })} onError={touched.pxDistrict && errors.pxDistrict} />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <CVLabel field='forms.rego.fields.px.village' />
                          <Field
                            type="text"
                            name="pxVillage"
                            id="pxVillage"
                            disabled={!values.pxDistrict}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div className="col-span-6">
                          <CVLabel field='forms.rego.fields.px.commune' />
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <div className="relative flex items-stretch flex-grow focus-within:z-10">
                              <Field
                                type="text"
                                name="pxCommune"
                                id="pxCommune"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              {errors.pxCommune && touched.pxCommune &&
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
                      {t('forms.rego.fields.px.visitDetails')}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {t('forms.rego.fields.px.visitDetailsDesc')}
                    </p>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className='overflow-hidden sm:rounded-md'>
                    <div className='px-4 py-5 bg-white sm:p-6'>
                      <div className='grid grid-cols-6 gap-6'>
                        <div className='col-span-6 sm:col-span-3'>
                          <CVLabel field='forms.rego.fields.px.whoToSee' />
                          <div className='mt-1'>
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="pxGPOnly"
                                  name="pxGPOnly"
                                  type="checkbox"
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label htmlFor="candidates" className="font-medium text-gray-700">
                                  {t('forms.rego.fields.px.gp')}
                                </label>
                                <p className="text-gray-500">{t('forms.rego.fields.px.gpOnly')}</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="h-5 flex items-center">
                                <input
                                  id="pxEyes"
                                  name="pxEyes"
                                  type="checkbox"
                                  disabled={values.pxGPOnly.true}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label htmlFor="comments" className="font-medium text-gray-700">
                                  {t('forms.rego.fields.px.eyes')}
                                </label>
                                <p className="text-gray-500">{t('forms.rego.fields.px.eyesChecked')}</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="pxEars"
                                  name="pxEars"
                                  type="checkbox"
                                  disabled={values.pxGPOnly.check}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label htmlFor="offers" className="font-medium text-gray-700">
                                  {t('forms.rego.fields.px.ears')}
                                </label>
                                <p className="text-gray-500">{t('forms.rego.fields.px.earsChecked')}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                          <CVLabel field='forms.rego.fields.px.reason' />
                          <div className='mt-1'>
                            <textarea id="about" name="about" rows="3"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                              placeholder="Why is the patient here today"></textarea>
                          </div>
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
