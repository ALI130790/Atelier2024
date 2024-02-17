import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [productoExiste, setProductoExiste] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    const productoRef = doc(db, "products", id)
    getDoc(productoRef)
      .then((respuesta) => {
        const productoDb = { id: respuesta.id, ...respuesta.data() }
        setProducto(productoDb);
      });

  }, [id]);

  return (
    <div>
      {productoExiste ? (
        <div>Producto no existe</div>
      ) : (
        <ItemDetail producto={producto} />
      )}
    </div>
  );
};

export default ItemDetailContainer