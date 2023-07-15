import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import { useTranslation } from 'next-i18next'

export function CVLabel(props) {
  const { t } = useTranslation();
  let requiredBadge;

  let labelClass = props.class ? props.class : 'block text-sm font-medium text-gray-700';

  if (props.required) requiredBadge = <CheckBadgeIcon className="h-5 w-5 text-blue-500 pl-1 inline" aria-hidden="true" />;
  return (
    <label htmlFor={props.labelFor} className={labelClass}>
      {t(props.field)} {requiredBadge}
    </label>
  )
}