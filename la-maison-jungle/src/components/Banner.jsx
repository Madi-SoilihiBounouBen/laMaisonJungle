/**
 * Banner est le composant pour présenter la bannière (la barre de navigation)
 * Le composant Banner retourne un message codé en HTML <h1>Bienvenue à la maison !</h1>
 * Le composant Banner est exporté pour être utilisé dans d'autres fichiers
 */

// J'importe le fichier Banner.css appliqué au composant
import logo from '../assets/annie-logo.jpg'

import styles from '../styles/Banner.module.css'



// Je déclare mon Banner, qui est une fonction qui retourne du JSX (HTML dans du JavaScript)
const Banner = () => {
    const title = "Bienvenue à la maison !"
    return (
        <div className={styles.banner}>

           <img src={logo} alt="Logo de la maison" className={styles.logo} />

            
            <h1 className={styles.title}>{title}</h1>


        </div>




    
    )
}

/*
* J'exporte le composant Banner, en utilisant les mots-clés export default suivis du nom du composant 
*/
export default Banner