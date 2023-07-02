import 'focus-visible'
import '@/styles/tailwind.css'
import { appWithTranslation } from 'next-i18next'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

const App = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default appWithTranslation(App)
