import './App.css'
import { Routes, Route } from "react-router-dom";
import ClientMainLayout from './layouts/Client/ClientMainlayout';
import Home from './pages/Client/Home';
import Wishlist from './pages/Client/Wishlist';
import AdminMainLayout from './layouts/Admin/AdminMainlayout';
import Dashboard from './pages/Admin/Dashboard';
import Add from './pages/Admin/Add';
import Details from './pages/Client/Details';
import NotFound from './components/Notfound';
function App() {


  return (
    <>
      <Routes>
        {/* Client */}
        <Route path="/" element={<ClientMainLayout />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<Details />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
        {/* Admin */}
        <Route path="/admin" element={<AdminMainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="add" element={<Add />} />
        </Route>
        {/* NotFound!! */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App
