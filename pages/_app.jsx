import 'focus-visible'
import '@/_styles/tailwind.css'
import { appWithTranslation } from 'next-i18next'

const App = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default appWithTranslation(App)
