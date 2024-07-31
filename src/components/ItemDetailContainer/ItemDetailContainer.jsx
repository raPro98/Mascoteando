import React from 'react'
import { useState, useEffect } from 'react'
import obtenerProductos from '../../data/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const {idProducto} = useParams();

    useEffect(() => { 
        obtenerProductos() 
        .then((data) => {
            const productosEncontrado = data.find((producto)=>producto.id === idProducto)
            setItem(productosEncontrado); 
        })
    },[]);


    // useEffect(() => {
    //     pedirItemPorId(id)
    //         .then((respuesta) =>{
    //             setItem(respuesta)
    //         })
    // }, [idProducto])
    
  return (
    <div className='d-flex'>
        {
            item && <ItemDetail item = {item} />
        }
    </div>
  )
}

export default ItemDetailContainer