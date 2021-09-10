import './App.css';
import Counter from './components/Counter';
import PageCounter from './pages/PageCounter';
import PageCounterMultiplo from './pages/PageCounterMultiplo';

function App() {
  return (
    <div className="App">
      <PageCounter />
      <PageCounterMultiplo />
    </div>
  );
}

export default App;
