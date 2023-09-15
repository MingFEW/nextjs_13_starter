import Image from 'next/image'
import Link from 'next/link'

import Container from './Container'

function Header() {
  return (
    <Container>
      <div className="flex flex-row items-center justify-between pb-4 pt-8">
        <div className="web-logo">
          <Link href="/">
            <Image
              src="/images/n_logo.svg"
              width={50}
              height={50}
              quality={100}
              alt="Website Logo"
            />
          </Link>
        </div>
        <div className="nav-left-side">
          <nav>
            <ul className="flex flex-row items-center gap-10 text-xl">
              <li>
                <Link
                  href="/"
                  className="font-light text-[#999999] transition-colors hover:text-white hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-light text-[#999999] transition-colors hover:text-white hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="font-light text-[#999999] transition-colors hover:text-white hover:underline"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Container>
  )
}

export default Header
