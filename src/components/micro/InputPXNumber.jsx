import { useState } from 'react'
import { SortAscendingIcon, UsersIcon } from '@heroicons/react/24/solid'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { useTranslation } from 'next-i18next'

export function PXNumber() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <label htmlFor="pxnumber" className="block text-sm font-medium text-gray-700">
      {t('forms.rego.fields.px.number')}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="number"
            name="pxnumber"
            id="pxnumber"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
            aria-invalid="true"
            aria-describedby="pxnum-error"
            minLength="4"
            maxLength="4"
            placeholder={t('forms.rego.fields.px.numberPlaceHolder')}
            value={input}
            onBlur={validate}
            onChange={e => setInput(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
          </div>
        </div>
        <button
          type="button"
          className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <SortAscendingIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          <span>Sort</span>
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-500" id="email-description">
        {t('forms.rego.fields.px.numberHint')}
      </p>
      <p className="mt-2 text-sm text-red-600" id="pxnum-error">
        {t('forms.rego.fields.px.numberError')}
      </p>
    </div>
  )
}
