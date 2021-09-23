import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openForm } from '../store/modules/shop/actions'

import { Header, HeaderTitle, RegisterButton } from '../styles'

const MainHeader = () => {
  const dispatch = useDispatch()
  const { isFormOpen } = useSelector((state) => state.shop)

  return (
    <Header>
      <HeaderTitle>Reactflix</HeaderTitle>
      <RegisterButton onClick={() => dispatch(openForm())}>Cadastrar vídeo</RegisterButton>
    </Header>
  )
}

export default MainHeader
