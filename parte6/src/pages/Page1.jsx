import { React, useState } from 'react'
import MainContent from '../components/MainContent'
import MainFooter from '../components/MainFooter'

// Components
import MainHeader from '../components/MainHeader'

// Styled
import { Container } from '../styles'

const Page1 = () => {

  return (
    <Container>
      <MainHeader />      
      <MainContent />
      <MainFooter />
    </Container>
  )
}

export default Page1
