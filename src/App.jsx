import './App.css'
import React from 'react';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='fondo'>
      <BrowserRouter>
        <NavBar/>

        <Routes>
            <Route path='/' element={<ItemListContainer saludo={'Bienvenidos a '} inicio = {'Mascoteando, lo que tú mascota necesita.'}/>} />
            <Route path='/categoria/id/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idProducto' element={<ItemDetailContainer/>} />

        </Routes>
        {/* <div className='container-lg'>
          <ItemListContainer saludo={'Bienvenidos a '} inicio = {'Mascoteando, lo que tú mascota necesita.'}/>
          <ItemDetailContainer itemId={'aperro-01'}/>
        </div> */}
      </BrowserRouter>
    </div>
  )
}

export default App
