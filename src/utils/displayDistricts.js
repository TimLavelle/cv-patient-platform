import {Field, useFormikContext} from 'formik';

export default function DisplayDistricts() {
  
  const {setFieldValue, values} = useFormikContext();
  
  let districts = [
    { id: '0', name: 'Select a Province first' }
  ]
  
  return (
    <Field
      as="select"
      id="pxDistrict"
      name="pxDistrict"
      disabled={!values.pxProvince}
      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    >
      {!districts ? districts : districts.map((p, i) => (
        <option key={i} value={p.dist_id}>{p.name}</option>
      ))}
    </Field>
  )
}