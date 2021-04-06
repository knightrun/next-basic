import Link from 'next/link'

const Header = () => (
  <div>
    <Link href="/blog">
      <a>header</a>
    </Link>

    <Link href="/dynamic/123">
      <a>dynamic</a>
    </Link>
  </div>
)

export default Header