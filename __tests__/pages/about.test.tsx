/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'

import AboutPage from '@/app/about/page'

describe('Render AboutPage', () => {
  it('First Heading', async () => {
    const jsx = await AboutPage()
    render(jsx)

    const headingOne = screen.getByText('About us')
    expect(headingOne).toBeInTheDocument()
  })
})
