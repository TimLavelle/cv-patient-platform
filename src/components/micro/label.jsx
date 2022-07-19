import { BadgeCheckIcon } from '@heroicons/react/solid'
import { useTranslation } from 'react-i18next'

export function CVLabel(props) {
  const { t, i18n } = useTranslation();
  return (
    <label htmlFor="province" className="block text-sm font-medium text-gray-700">
      {t(props.field)} <BadgeCheckIcon className="h-5 w-5 text-blue-500 pl-1 inline" aria-hidden="true" />
    </label>
  )
}