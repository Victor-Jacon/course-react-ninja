import styled from 'styled-components'
import { ErrorBoundary, PageMultipleSuspense } from './components/LearnSuspenseAndLazy'

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <PageMultipleSuspense />
      </ErrorBoundary>
    </>
  );
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background-color: black;
`

export default App;
