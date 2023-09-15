'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { isActiveMenu } from '@/utils/general.helper'

function Nav() {
  const pathname = usePathname()

  return (
    <nav>
      <ul className="flex flex-row items-center gap-10 text-xl">
        <li>
          <Link
            href="/"
            className={`${
              pathname === '/' ? 'text-white underline' : ''
            } font-light text-[#999999] transition-colors hover:text-white`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`${
              isActiveMenu(pathname, '/about') ? 'text-white underline' : ''
            } font-light text-[#999999] transition-colors hover:text-white`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/blogs"
            className={`${
              isActiveMenu(pathname, '/blogs') ? 'text-white underline' : ''
            } font-light text-[#999999] transition-colors hover:text-white`}
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
