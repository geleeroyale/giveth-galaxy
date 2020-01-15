import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

const Container = styled.div`
  padding-top: 20vh;
  min-height: 60vh;
  max-width: 960px;
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 640px) {
    padding: 0 1rem;
  }
`

const NotFoundPage = () => (
  <Layout>
    <Container>
      <h1>404 Page not found</h1>
      <p>You tried to access a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
