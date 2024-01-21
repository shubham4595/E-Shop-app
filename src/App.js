import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import ProductList from './pages/ProductList'
import About from './pages/About';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
