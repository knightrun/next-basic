import {AppProps} from 'next/app'
import '~/public/css/reset.css'
import '~/public/css/globals.css'
import '@/assets/style/common.scss'

function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}

export default App