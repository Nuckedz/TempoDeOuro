import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';  // Importa o componente Home
import Participe from './components/Participe';
import Lista from './components/Lista';
import AddIdoso from './components/AddIdoso';


function App() {
  return (
    <BrowserRouter>
      <div>

        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="Lista" element={ <Lista/> }/>
          <Route path="Participe" element={ <Participe/> }/>
          <Route path="AddIdoso" element={ <AddIdoso/> }/>
        </Routes>

      </div>
    </BrowserRouter>
    );
}

export default App;
