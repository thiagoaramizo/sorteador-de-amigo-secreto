import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Container from './components/Container/Container';
import Inicial from './paginas/Inicial/Inicial';

function App() {
  return (
    <>
      <Cabecalho/>
      <Container>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Inicial/>}/>
            </Routes>
          </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
