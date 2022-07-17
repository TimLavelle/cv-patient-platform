import Head from 'next/head'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { SiteHeader } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import { RegForm } from '@/components/forms/rego'

export default function Home() {
	const { t, i18n } = useTranslation();
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