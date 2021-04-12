import Gnb from './gnb'
// import '@/assets/header/header.scss'
//emotion 써야 할듯

const Header = () => (
  <header>
    <div className="title-wrap">
      <img src="/images/logo.png" alt=""/>
      <h1>Next Basic</h1>
    </div>
    <Gnb />
  </header>
)

export default Header