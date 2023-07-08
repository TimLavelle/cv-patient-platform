'use client'

import { Field, useFormikContext } from 'formik';
import GetDistrictsAPI from '@/_utils/services/GetDistrictsAPI';
import { useState, useEffect, useCallback } from 'react';

export default function DisplayDistricts(props) {

  const { setFieldValue, values } = useFormikContext();
  let passedProvID = props.idProvince;

  let [selectedDistricts, setSelectedDistricts] = useState({
    data: [{ dist_id: '0', name: 'Select a Province first' }]
  });

  const handleDistricts = useCallback(() => {
    console.log('Province passed = ' + passedProvID)

    GetDistrictsAPI(passedProvID).then(data => {
      console.log('Province District Data is ', data)
      setSelectedDistricts(data);
    });

  }, [passedProvID]);

  useEffect(() => {
    handleDistricts();
  }, [passedProvID, handleDistricts]);

  return (
    <Field
      as="select"
      id="pxDistrict"
      name="pxDistrict"
      disabled={!values.pxProvince}
      onChange={(e) => {
        handleDistricts()
        setFieldValue('pxDistrict', e.target.value)
      }}
      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    >
      {selectedDistricts.data.map((p, i) => (
        <option key={i} value={p.dist_id}>{p.name}</option>
      ))}
    </Field>
  )
}