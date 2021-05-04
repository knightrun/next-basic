import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import styled from "@emotion/styled";

const DefaultContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const MainWrap = styled.div`
  padding: 40px 0;
`

const DefaultLayout = ({children}) => (
  <DefaultContainer>
    <Header/>
    <MainWrap>{children}</MainWrap>
    <Footer/>
  </DefaultContainer>
)

export default DefaultLayout