import {Listbox, Transition} from '@headlessui/react';
import {BadgeCheckIcon, CheckIcon, SelectorIcon} from '@heroicons/react/solid';
import {Fragment, React} from 'react';
import {Field} from 'formik';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function CustomListBox(props) {
  
  let listName = props.listName;
  let optionID = props.optionID;
  let optionValue = props.optionValue;
  let listState = props.listState;
  let changedState = props.changedState;
  let formikID = props.formikID;
  let listObject = props.listObject;
  let listLabel = props.listLabel;
  
  return (
    <>
      <Listbox name={listName} value={listState[optionID]} onChange={changedState}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-gray-700">{listLabel} <BadgeCheckIcon className="h-5 w-5 text-blue-500 pl-1 inline" aria-hidden="true" /></Listbox.Label>
            <div className="mt-1 relative">
              <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <span className="block truncate">{listState[optionValue]}</span>
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
                  {listObject.map((obj) => (
                    <Listbox.Option
                      key={obj[optionID]}
                      className={({ active }) =>
                        classNames(
                          active ? 'text-white bg-indigo-600' : 'text-gray-900',
                          'cursor-default select-none relative py-2 pl-3 pr-9'
                        )
                      }
                      value={obj}
                    >
                      {({ selected, active }) => (
                        <>
                          <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                            {obj[optionValue]}
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
      <Field type="hidden" name={formikID} id={formikID} value={listState.name} onChange={changedState}/>
    </>
  )
}