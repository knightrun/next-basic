import {AppProps} from 'next/app'
import '~/public/css/reset.css'
import '~/public/css/globals.css'
import '@/assets/style/common.scss'
import styled from '@emotion/styled'
import DefaultLayout from '@/components/layouts/default'
import React, {ComponentType} from "react";
import {NextPage} from "next";

const Container = styled.div`
  display:flex;
  flex-direction: column;
  min-height: 100vh;
`

// type GetLayoutFunc = (page: React.ReactElement) => React.ReactElement
// type PageWithLayout = NextPage & {
//   useLayout: GetLayoutFunc
// }
//
// function App({Component, pageProps}: AppProps) {
//   const useLayout = (Component as PageWithLayout).useLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)
//   return useLayout(<Component {...pageProps} />)
// }

type PageWithLayout = NextPage & {
  Layout: ComponentType
}

function App({Component, pageProps}: AppProps) {
  const Layout = (Component as PageWithLayout).Layout || DefaultLayout

  return (
    <Container>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Container>
  )
}

export default App