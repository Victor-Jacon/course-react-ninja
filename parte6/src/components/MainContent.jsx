import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Main } from '../styles'
import RegisterVideo from './RegisterVideo'
import VideoSingle from './VideoSingle'
import VideosList from './VideosList'

const MainContent = () => {

  const dispatch = useDispatch()
  const { isFormOpen } =  useSelector((state) => state.shop)

  return (
    <Main>
      { isFormOpen && <RegisterVideo /> }
      <VideoSingle />
      <VideosList />
    </Main>
  )
}

export default MainContent
