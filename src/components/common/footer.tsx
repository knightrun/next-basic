import {css} from '@emotion/react'

const footerWrap = css`
  background-color: #222;
  padding: 10px;
  color: #fff;
  margin-top: auto;
  height: 200px;
`

const Footer = () => (
  <footer css={footerWrap}>
    Footer
  </footer>
)

export default Footer