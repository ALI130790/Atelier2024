import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "./carrito.css";

const carrito = () => {
  const { carrito, borrarCarrito, borrarProducto, totalPrecio } = useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="carrito-vacio">
        <h1> Tu carrito esta vacio 💔</h1>
        <Link className="button" to="/">
          Volver al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="carrito">
      <ul className="lista">
        {carrito.map((producto) => (
            <li className="producto" key={producto.id}>
              <img className="imagen"
                src={producto.imagen}
                alt={producto.nombre} 
                />

              <p className="texto nombre">{producto.nombre} </p>
              <p className="texto">Cantidad: {producto.cantidad} </p>
              <p className="texto">Precio: ${producto.precio} </p>

              <button className="borrar" onClick={() => borrarProducto(producto.id)}>Eliminar</button>
            </li>
          ))
        }
      </ul>
      <h3 className="tetxtoPagar">Total a pagar: {totalPrecio()} </h3>

      <button className="borrar-todo" onClick={borrarCarrito}>Eliminar Carrito</button>

      <Link to="/checkout">
        Continuar mi compra
      </Link>
    </div>
  );
};

export default carrito
