import React from 'react'
import Card from "react-bootstrap/Card"; 
import '../../assets/css/Producto.css';

const Producto = ({ nombre, precio, descripcion, imagen }) => {
    return (
        <Card className="my-2">
            <img src={imagen} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text"><i className="fas fa-map-marker-alt"></i><span className="ms-2">{descripcion}</span></p>
            </div>
            <div className="mx-2"><hr className="solid" /></div>
            <div className="text-end p-2">
                <span className="precio-activo">{precio}</span>
            </div>
        </Card>
    )
}

export default Producto
