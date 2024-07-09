import './App.css'
import {Button} from './components/Button'
import { ItemListContainer } from './components/ItemListContainer'
import { NavBar } from './components/NavBar'

export function App() {

  const Click = (mensaje) =>{
    return () => {
      console.log(mensaje)
    }
  }

  return (
    <>
      <NavBar />
      <ItemListContainer saludo="Buenos dias/tardes/noches, como se encuentra el dia de hoy?" />
      <Button texto="Joya" color="green" funcion={Click("Me alegra que estes bien!")} />
      <Button texto="Regular" color="yellow" funcion={Click("Hay que mirar siempre el vaso medio lleno!")} />
      <Button texto="Mal" color="red" funcion={Click("Lo malo es pasajero!")} />
    </>
  )
  
}

export default App;