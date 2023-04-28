import { useState } from 'react'
import './App.css'
import { Tarjetapersonal } from './Componentes/tarjetapersonal';
import { NavBar } from './Componentes/Navbar/NavBar';
import { ItemListContainer } from './Componentes/ItemListConteiner/ItemListConteiner';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'} />
      <h2>Proyecto 1</h2>
      <hr/>
     <Tarjetapersonal nombre="Robert" edad="21" curso="REACT" />

    </div>
  );
}

export default App
