import React from 'react'
import obtenerProductos from '../../data/data'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({saludo, inicio}) => {
  
  const [prodMascoteando, setProdMascoteando] = useState([]); //se hace un estado para arrancar los productos vacios
    // prodMascoteando contiene la lista de los productos y setProdMascoteando es la funcion que actualiza el estado
    
    const {idCategoria} = useParams();

    useEffect(() => { 
        obtenerProductos() 
        .then((respuesta) => {
          if(idCategoria){
            const productosFiltrados = respuesta.filter((producto)=>producto.categoria.id === idCategoria)
            setProdMascoteando(productosFiltrados); //aqui se guarda los productos filtrados
          } else{
            setProdMascoteando(respuesta); //Aqui se guarda todos los productos
          }
        })
    },[idCategoria]);



  return (
    <div className='container-lg'>
      <h1 className='text-center'>{saludo} {inicio}</h1>
      <ItemList prodMascoteando = {prodMascoteando}/>
    </div>
  )
}

export default ItemListContainer