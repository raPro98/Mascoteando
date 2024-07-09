import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const inicio = 'Mascoteando, lo que tú mascota necesita.'
  return (
    <div className='fondo'>
      <NavBar />
      <div className='container-lg'>
        <ItemListContainer saludo={'Bienvenidos a '} inicio = {'Mascoteando, lo que tú mascota necesita.'}/>
      </div>
    </div>
  )
}

export default App
