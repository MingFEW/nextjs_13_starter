/* eslint-disable tailwindcss/no-custom-classname */
import type { Metadata } from 'next/types'
import React from 'react'

import Hero from '@/components/Hero'
import { Container } from '@/components/layout'
import { Content } from '@/components/Views/AboutPage'

export const metadata: Metadata = {
  title: 'About Page | Next13 Starter',
  description: 'Get DATA SSR'
}

const page = () => {
  return (
    <Container>
      <div className="inner pb-44 pt-6">
        <h1 className="mb-2 text-2xl font-bold">About us</h1>
        <Hero />
        <Content />
      </div>
    </Container>
  )
}

export default page
