import Link from 'next/link'

const Gnb = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>

    <Link href="/dynamic/123">
      <a>List</a>
    </Link>
  </div>
)

export default Gnb