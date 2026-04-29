// J'importe les modules StrictMode et createRoot depuis les bibliothèques React et ReactDOM respectivement. StrictMode est un outil de développement qui aide à détecter les problèmes potentiels dans l'application, tandis que createRoot est utilisé pour créer une racine de rendu pour l'application React.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// J'importe le fichier CSS index.css pour appliquer les styles globaux à l'application. Cela permet de styliser les éléments de l'application en utilisant les classes et les sélecteurs définis dans ce fichier CSS.
import './index.css'

// J'importe le composant App depuis le fichier './App.jsx'. Cela me permet d'utiliser le composant App dans ce fichier. Le chemin './App.jsx' est relatif à l'emplacement de ce fichier (main.jsx), ce qui signifie que je cherche le fichier App.jsx dans le même dossier que main.jsx.
import App from './App.jsx'

// Je crée une racine de rendu en utilisant la fonction createRoot de ReactDOM. Je cible l'élément HTML avec l'id 'root' pour y rendre mon application React. Ensuite, j'appelle la méthode render sur cette racine de rendu, en passant mon composant App enveloppé dans StrictMode. StrictMode est un outil de développement qui aide à détecter les problèmes potentiels dans l'application. App est le composant principal de l'application qui contient la structure et la logique de l'interface utilisateur.L'écriture avec le slash à la fin ( />) est juste un raccourci pour dire : "Ouvre et ferme la balise d'un seul coup, car je n'ai rien à mettre à l'intérieur pour l'instant".
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
