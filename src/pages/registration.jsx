import Head from 'next/head'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { SiteHeader } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/layout/Container'
import { RegForm } from '@/components/forms/rego'

export default function Registration() {
	const { t } = useTranslation();
	const pageTitle = t('global.cv.label') + ' - ' + t('global.px.label');

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<SiteHeader />
			<main>
				<Container>
					<span className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						{t('forms.rego.page.title')}
					</span>
					<RegForm />
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