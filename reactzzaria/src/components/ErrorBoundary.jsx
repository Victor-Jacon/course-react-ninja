import { Component } from 'react'

export class ErrorBoundary extends Component {

    state = { hasError: false }
  
    static getDerivedStateFromError() {
      return { hasError: true }
    }

    componentDidCatch (error, info) {
        console.log('error', error)
        console.log('info', info.componentStack)
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Deu erro!</h1>
      }
      return this.props.children
    }
  }