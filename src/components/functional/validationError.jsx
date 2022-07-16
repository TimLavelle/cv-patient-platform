import ErrorMessage  from 'formik';
console.log('Rendered')
export function validationError({ ...props }) {
  return (
    <React.Fragment>
      <ErrorMessage
        name={props.target}
        component="p"
        className="mt-2 text-sm text-red-600"
      />
    </React.Fragment>
  )
}