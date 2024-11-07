import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Participe from './components/Participe';
import Lista from './components/Lista';
import AddIdoso from './components/AddIdoso';
import { Analytics } from "@vercel/analytics/react";



function App() {
  return (
    <BrowserRouter>
      <div>
        <Analytics />
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
