/* eslint-disable react-hooks/rules-of-hooks */
/* TODO: Fix the hook useProvinces inside the useMemo in order to have proper code */
import {Field, useFormikContext} from 'formik';
import GetDistrictsAPI from '@/utils/services/GetDistrictsAPI';
import {useState} from 'react';

export default function DisplayDistricts(props) {
  
  const {setFieldValue, values} = useFormikContext();
  let passedProvID = props.idProvince;
  
  const selectedDistricts = [
    {dist_id: '0', name: 'Select a Province first'},
  ]
  let districts = [{}];
  
  // if(passedProvID > 0) handleDistricts();
  
  function handleDistricts(){
    
    console.log('Province passed = ' + passedProvID)
    districts = GetDistrictsAPI(passedProvID).then(data => {
      // console.log(data)
      return data;
    });
  }
  
  return (
    <Field
      as="select"
      id="pxDistrict"
      name="pxDistrict"
      disabled={!values.pxProvince}
      onChange={(e) => {
        // handleDistricts()
        setFieldValue('pxDistrict', e.target.value)
      }}
      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    >
      {districts.map((p, i) => (
        p.length > 0 ? <option key={i} value={p.dist_id}>{p.name}</option> : <option key={i} value={selectedDistricts[0].dist_id}>{selectedDistricts[0].name}</option>
      ))}
    </Field>
  )
}