import { Container } from '../App'

import React, { Suspense } from 'react'
const ButtonLazy = React.lazy(() => import('./ButtonLazy'));

export const PageSingleSuspense = () => {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <ButtonLazy />
      </Suspense>
    </Container>
  )
}

export const PageMultipleSuspense = () => {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <ButtonMultipleSuspense color={'red'}/>
        <ButtonMultipleSuspense color={'blue'}/>
        <ButtonMultipleSuspense color={'green'}/>
        <ButtonMultipleSuspense color={'yellow'}/>
      </Suspense>
    </Container>
  )
}

export const ButtonMultipleSuspense = (color) => <button style={{ backgroundColor: color }}>Button 1</button>
