import Image from 'next/image'
import Link from 'next/link'

import Container from './Container'
import Nav from './Nav'

function Header() {
  return (
    <Container>
      <div className="flex flex-row items-center justify-between pb-4 pt-8">
        <div className="web-logo">
          <Link href="/">
            <Image src="/images/n_logo.svg" width={50} height={50} quality={100} alt="Website Logo" />
          </Link>
        </div>
        <div className="nav-left-side">
          <Nav />
        </div>
      </div>
    </Container>
  )
}

export default Header
