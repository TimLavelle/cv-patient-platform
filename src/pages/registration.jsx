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
        sss
      </Container>
		</main>
		<Footer />
	  </>
	)
}