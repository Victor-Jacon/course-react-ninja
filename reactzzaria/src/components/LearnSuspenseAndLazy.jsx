import { Container } from '../App'

import React, { Suspense, Component } from 'react'
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

export class ErrorBoundary extends Component {

  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <h1>Deu erro!</h1>
    }
    return this.props.children
  }
}

export const ButtonMultipleSuspense = (color) => <button style={{ backgroundColor: color }}>Button 1</button>
