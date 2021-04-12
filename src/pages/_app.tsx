import {AppProps} from 'next/app'
import '@/assets/css/reset.css'
import '@/assets/css/globals.css'
import '@/assets/common.scss'

function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}

export default App