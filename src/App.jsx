import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Titulo from "./components/Titulo";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error/Error";
import Carrito from "./components/carrito/carrito";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";

import './App.css';

function App() {


  return (
    <CartProvider>
      <BrowserRouter>
        <section id="app">
          <NavBar />
          <Titulo />

          <Routes>
            <Route path="/" element={<ItemListContainer saludo="
            En nuestro Atelier realizamos vestidos a medida para Novias, 15 años, Madrinas, Egresos, Invitadas, cortejo de niñas, y vestidos en general. 
            Consultanos por presupuestos y pruebas de vestidos.
            Te ofrecemos la mejor atencion." />} />
            <Route path="/categorias/:categoria" element={<ItemListContainer />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="*" element={<Error />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
        </section>
      </BrowserRouter>
    </CartProvider >
  );
}

export default App;
