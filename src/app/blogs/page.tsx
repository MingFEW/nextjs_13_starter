import './styles.css'

import React from 'react'

import { Container } from '@/components/layout'

const page = () => {
  return (
    <Container>
      <div className="inner py-6">
        <h1>Page BLOGS</h1>
        <div className="page-ttl pt-8">Article listing</div>
      </div>
    </Container>
  )
}

export default page
