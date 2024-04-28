import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Feedback from './layout/Feedback';
import Login from './layout/Login';
import Home from './layout/Home';
import Cart from './layout/Cart';
import { NavigateProvider } from './layout/NavigateContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigateProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </NavigateProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
