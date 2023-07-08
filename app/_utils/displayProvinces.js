'use client'

import { React, useMemo } from 'react';
import GetProvincesAPI from '@/_utils/services/GetProvincesAPI';
import { Field, useFormikContext } from 'formik';
import { useTranslation } from 'next-i18next';

export default function DisplayProvinces(props) {

  const [provinces] = GetProvincesAPI();
  const { setFieldValue, errors, touched } = useFormikContext();
  const { t } = useTranslation();

  function handleSelectedProvince(pr) {
    console.log('Selected Province = ' + pr)
    //TODO: Want to send 'pr' to displayDistricts.js in order to pull the appropriate Districts
    props.callBack({ id: pr })
  }

  return (
    <>
      <Field
        as="select"
        id="pxProvince"
        name="pxProvince"
        onChange={(e) => {
          handleSelectedProvince(e.target.value)
          setFieldValue('pxProvince', e.target.value)
        }}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {!provinces ? provinces : provinces.data.map((p, i) => (
          <option key={i} value={p.prov_id}>{p.prov_name}</option>
        ))}
      </Field>
      {props.onError &&
        <p className="mt-2 text-sm text-red-600" id="pxnum-error">
          {t('forms.rego.fields.px.provinceError')}
        </p>
      }
    </>
  )
}