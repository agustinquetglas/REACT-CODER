import './App.css'
import {Button} from './components/Button'
import { ItemListContainer } from './components/ItemListContainer'
import { NavBar } from './components/NavBar'

export function App() {

  const Click = () =>{
    console.log("hola chanvales")
  }

  return (
    <>
      <NavBar />
      <ItemListContainer saludo="Buenos dias/tardes/noches" />
      <Button texto="botoncito rojo" color="red" funcion={Click} />
      <Button texto="botoncito azul" color="green" funcion={Click} />
    </>
  )
}

export default App;