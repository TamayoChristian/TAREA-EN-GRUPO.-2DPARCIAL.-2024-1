import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Pedidos from './pages/pedidos';
import Bolsita from './pages/bolsita';
import Reservas  from './pages/reservas';
import { MenuProvider } from './contex/MenuProvider';
import { BolsitaProvider } from './contex/BolsitaProvider';

function App() {
  return (
    <>
      <MenuProvider>
        <BolsitaProvider>
          <Navbar></Navbar>
          <Routes>
            <Route path='/pedido' element={<Pedidos />}></Route>
            <Route path='/bolsita' element={<Bolsita />}></Route>
            <Route path='/reservas' element={<Reservas/>}></Route>
          </Routes>
        </BolsitaProvider>
      </MenuProvider>
    </>
  );
}


export default App;