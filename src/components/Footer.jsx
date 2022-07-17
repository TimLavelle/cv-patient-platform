import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <footer className="bg-gray-800 mt-20">
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="/">{t('nav.dashboard.label')}</NavLink>
              <NavLink href="/stats">{t('nav.stats.label')}</NavLink>
              <NavLink href="/team">{t('nav.team.label')}</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
          {t('global.copy.label')} &copy; {new Date().getFullYear()} {t('global.cv.label')}
          </p>
        </div>
      </div>
    </footer>
  )
}
