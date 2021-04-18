import {AppProps} from 'next/app'
import '~/public/css/reset.css'
import '~/public/css/globals.css'
import '@/assets/style/common.scss'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import styled from '@emotion/styled'

const Container = styled.div`
  display:flex;
  flex-direction: column;
  min-height: 100vh;
`

function App({Component, pageProps}: AppProps) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Container>
  )
}

export default App