import styled from 'styled-components'
import { PageMultipleSuspense } from './components/LearnSuspenseAndLazy'

const App = () => {
  return (
    <>
      <PageMultipleSuspense />
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
