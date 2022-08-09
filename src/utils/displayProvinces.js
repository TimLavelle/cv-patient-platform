import {React, useMemo} from 'react';
import GetDistrictsAPI from '@/utils/services/GetDistrictsAPI';
import GetProvincesAPI from '@/utils/services/GetProvincesAPI';
import {Field, useFormikContext } from 'formik';
import {ExclamationCircleIcon} from '@heroicons/react/solid';
import {useTranslation} from 'react-i18next';

export default function DisplayProvinces(props){
  
  const [ provinces ] = GetProvincesAPI();
  const handleSelectedProvince = useMemo(() => useProvinces(), []);
  const {setFieldValue, errors, touched} = useFormikContext();
  const { t, i18n } = useTranslation();
  
  function useProvinces(){
    console.log('Fired')
    function handleSelectedProvince(pr) {
      console.log('Selected Province = ' +pr)
      setFieldValue('pxProvince', pr)
      GetDistrictsAPI(pr);
    }
    
    return handleSelectedProvince;
  }
  
  return (
    <>
      <Field
        as="select"
        id="pxProvince"
        name="pxProvince"
        onChange={(e)=> {
          handleSelectedProvince(e.target.value)
        }}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {!provinces ? provinces : provinces.map((p, i) => (
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