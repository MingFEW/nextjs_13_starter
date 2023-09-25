/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'

import Home from '@/app/page'

describe('Render all static Elements on HomePage', () => {
  it('First Heading', () => {
    render(<Home />)
    const heading = screen.getByText(/Get started by editing/i)

    expect(heading).toBeInTheDocument()
  })

  it('Show guide file text', () => {
    render(<Home />)
    const codeTag = screen.getByText('src/app/page.tsx')

    expect(codeTag).toBeInTheDocument()
    expect(codeTag).toHaveClass('font-mono font-bold')
  })

  it('Show vercel.svg', () => {
    render(<Home />)
    const logoImage = screen.getByAltText(/Vercel Logo/i)

    expect(logoImage).toBeInTheDocument()
    expect(logoImage).toHaveAttribute('src', '/vercel.svg')
  })

  it('Show next.svg', () => {
    render(<Home />)
    const nextImage = screen.getByAltText(/Next.js Logo/i)

    expect(nextImage).toBeInTheDocument()
    expect(nextImage).toHaveAttribute('src', '/next.svg')
  })

  it('renders correctly with Snapshot', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  })
})
