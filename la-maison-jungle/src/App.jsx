import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// J'importe le composant Banner depuis le fichier './components/Banner'. Cela me permet d'utiliser le composant Banner dans mon composant App. le . veut dire que je cherche le fichier Banner dans le dossier components qui se trouve à la racine de mon projet (le même niveau que App.jsx). Le chemin './components/Banner' est relatif à l'emplacement du fichier App.jsx.
import Banner from './components/Banner'
// Je déclare un composant App, qui prend forme d'une fonction, qui retourne Banner

// J'import le composant Cart
import Cart from './components/Cart'
import ShoppingList from './components/ShoppingList'

function App() {
 

  return (
    <>
      <Banner />

      <Cart />

      <ShoppingList />
    
    </>

  )
}

// J'exporte le composant App, en utilisant les mots-clés export default suivis du nom du composant. Cela permet à d'autres fichiers d'importer et d'utiliser le composant App.
export default App
