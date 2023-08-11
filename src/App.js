
import './App.css';
import Header from './Components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/home';
import CartPage from './Components/cart';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
            <Route path='/' element={<Home  />} />
                
            <Route path='/cart' element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
