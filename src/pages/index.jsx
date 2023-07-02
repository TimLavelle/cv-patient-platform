import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { SiteHeader } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PatientTable } from '@/components/PatientTable'
import { Container } from '@/components/layout/Container'
import { MissionYear } from '@/components/micro/missionYear'

export default function Home() {
  const { t } = useTranslation();
  const pageTitle = t('global.cv.label') +' - ' + t('global.px.label');

	return (
	  <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <SiteHeader />
      <main>
        <Container>
          <h1>
            <span className="block text-base font-semibold tracking-wide uppercase">
              {t('global.cv.label')} - <MissionYear /> {t('global.mission.label')}
            </span>
            <span className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {t('page.rego.page.title')}
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-500 leading-8">
            {t('page.rego.welcome.label')}
          </p>
          <p className="mt-4 text-xl text-gray-500 leading-8">{t('page.rego.newPX.label')}&nbsp;
            <Link href="/registration" className="font-medium text-blue-600 hover:underline">
               {t('page.rego.newPX.link')}
            </Link>
          </p>
          <h2>
            <span className="mt-8 block text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              {t('page.rego.existingPX.header')}
            </span>
          </h2>
          <p className='mt-4 text-xl text-gray-500 leading-8'>{t('page.rego.existingPX.detail')}</p>
          <PatientTable />
        </Container>
      </main>
      <Footer />
	  </>
	)
}

export async function getStaticProps(context) {
  const { locale } = context

  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  }
}