import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Pedidos from './pages/pedidos';
import Bolsita from './pages/bolsita';
import Reservas from './pages/reservas';
import ModoAdministrador from './pages/modoAdministrador';
import { MenuProvider } from './contex/MenuProvider';
import { BolsitaProvider } from './contex/BolsitaProvider';
import { AdminProvider } from './contex/AdminProvider';
function App() {

  const iralmodoAdmin = useNavigate();
  const location = useLocation();

  const handleAdmin = () => {
    iralmodoAdmin('/admin');
  }

  return (
    <>
      <MenuProvider>
        <BolsitaProvider>
          <AdminProvider>
            <Navbar></Navbar>
            <Routes>
              <Route path='/pedido' element={<Pedidos />}></Route>
              <Route path='/bolsita' element={<Bolsita />}></Route>
              <Route path='/reservas' element={<Reservas />}></Route>
              <Route path='/admin' element={<ModoAdministrador />}></Route>
            </Routes>
            {location.pathname !== '/admin' && (
              <button onClick={handleAdmin}>Modo Administrador</button>
            )}
          </AdminProvider>
        </BolsitaProvider>
      </MenuProvider>
    </>
  );
}


export default App;