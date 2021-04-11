import {AppProps} from 'next/app'
import '@/../../public/css/reset.css'
import '@/../../public/css/globals.css'

function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}

export default App