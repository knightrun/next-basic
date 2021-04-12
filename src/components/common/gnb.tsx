import Link from 'next/link'

const Gnb = () => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>

    <Link href="/dynamic/123">
      <a>List</a>
    </Link>
  </nav>
)

export default Gnb