import Gnb from './gnb'
import {css, jsx} from '@emotion/react'

const titleWrap = css`
  position: relative;
  background-color: #222;
  height: 100px;
  padding-left: 120px;
`

const title = css`
  font-size: 30px;
  color: #fff;
  line-height: 100px;
  font-weight: 500;
`

const Header = () => (
  <header>
    <div className="title-wrap" css={titleWrap}>
      <div className="image-wrap" css={css`
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 80px;
      `}>
        <img src="/images/logo.png" alt="" css={css`width: 100%;`}/>
      </div>
      <h1 css={title}>Next 테스트</h1>
    </div>
    <Gnb/>
  </header>
)

export default Header