import { useEffect } from "react";
import "./Titulo.css"

const Titulo = () => {

    useEffect(() => {
        const mostrarAnchoVentana = () => {
            console.log("Ancho:", window.innerWidth)
        }
        window.addEventListener('resize', mostrarAnchoVentana)

        return () => {
            window.removeEventListener('resize', mostrarAnchoVentana)
        }
    }, [])

    return (
        <div className="titulo">
            <p>ATELIER VIVIANA FERNANDEZ </p>
            <p>Bienvenidos al lugar donde sus sueños se hacen realidad!</p>
        </div>
    )
}
export default Titulo;