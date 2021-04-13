import Gnb from './gnb'
import {css,jsx} from '@emotion/react'

const danger = css`
  color: red;
`

const Header = () => (
  <header>
    <div className="title-wrap">
      <img src="/images/logo.png" alt=""/>
      <h1 css={danger}>Next Basic</h1>
    </div>
    <Gnb />
  </header>
)

export default Header