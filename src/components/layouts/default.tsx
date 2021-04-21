import Header from '@/components/common/header'
import Footer from '@/components/common/footer'

const DefaultLayout = ({ children }) => (
    <div className="default-container">
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
)

export default DefaultLayout