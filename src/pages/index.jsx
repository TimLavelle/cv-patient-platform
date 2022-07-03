import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { SiteHeader } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PatientTable } from '@/components/PatientTable'
import { Container } from '@/components/Container'
import { MissionYear } from '@/components/micro/missionYear'

export default function Home() {
  const { t, i18n } = useTranslation();
  const pageTitle = t('global.cv.label') +' - ' + t('global.px.label');
	return (
	  <>
		<Head>
		  <title>{pageTitle}</title>
		</Head>
		<SiteHeader />
		<main>
      <Container>
        <div className="relative py-16 bg-white overflow-hidden">
          <div className="text-base mx-auto">
            <h1>
            <span className="block text-base text-indigo-600 font-semibold tracking-wide uppercase">
            {t('global.cv.label')} - <MissionYear /> {t('global.mission.label')}
            </span>
            <span className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t('page.rego.reg.label')}
            </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">{t('page.rego.welcome.label')}</p>
            <p className="mt-8 text-xl text-gray-500 leading-8">{t('page.rego.newPX.label')} <Link href="/registration" className="font-medium text-blue-600 hover:underline">{t('page.rego.newPX.link')}</Link>
            </p>
          </div>
          <div className="mt-6 text-gray-500 mx-auto">
            <h2>
              <span className="mt-2 block text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">{t('page.rego.existingPX.header')}</span>
            </h2>
            <p className='mt-8 text-xl text-gray-500 leading-8'>{t('page.rego.existingPX.detail')}</p>
          </div>
        </div>
      </Container>
      <PatientTable />
		</main>
		<Footer />
	  </>
	)
}