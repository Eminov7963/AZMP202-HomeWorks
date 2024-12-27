import { Routes, Route } from 'react-router-dom'
import './App.css'
import ClientLayout from './components/Client/Client-layout'
import Home from './pages/Client/Home'
import About from './pages/Client/About';
import Products from './pages/Client/Products';
import Detail from './pages/Client/Detail';
import Contact from './pages/Client/Contact';

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="detail" element={<Detail />} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App
