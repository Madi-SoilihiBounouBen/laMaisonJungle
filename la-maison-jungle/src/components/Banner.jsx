/**
 * Banner est le composant pour présenter la bannière (la barre de navigation)
 * Le composant Banner retourne un message codé en HTML <h1>Bienvenue à la maison !</h1>
 * Le composant Banner est exporté pour être utilisé dans d'autres fichiers
 */

// J'importe le fichier Banner.css appliqué au composant
import logo from '../assets/annie-logo.jpg'

import styles from '../styles/Banner.module.css'

/**
 * 
 * @param {*} param0 
 * @returns 
 * Le composant Banner.jsx prend comme props ses enfants déclarés dans le composant App.jsx
 * J'utilise {children} pour faire appel aux props venant du composant <Banner></Banner> déclaré dans le composant App.jsx
 * Le composant Banner.jsx retourne un <div> qui contient les enfants {children}
 */

// Je déclare mon Banner, qui est une fonction qui retourne du JSX (HTML dans du JavaScript)
const Banner = ({children}) => {
    
    return (
        <div className={styles.banner}>

           
            {children}
            
            


        </div>




    
    )
}

/*
* J'exporte le composant Banner, en utilisant les mots-clés export default suivis du nom du composant 
*/
export default Banner