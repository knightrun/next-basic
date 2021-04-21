import Gnb from '@/components/common/gnb'

const NoneLayout = ({ children }) => (
    <div className="none-container">
      <Gnb/>
      <div className="main">{children}</div>
    </div>
)

export default NoneLayout