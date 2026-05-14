import { useState } from 'react'

import { FaFacebook, FaInstagram, FaTwitter,  FaSnapchat, FaTiktok } from 'react-icons/fa'


import styles from '../styles/Footer.module.css'

const Footer = () => {
    const [inputValue, setInputValue] = useState('')

    const handleInput = (event) => {
        setInputValue(event.target.value)
    }

    const handleBlur = () => {
        if (!inputValue.includes('@')) {
            alert("Veuillez entrer une adresse email valide.")
        }
    }

    return (
        <footer className={styles.lmjfooter}>

            <div className={styles.lmjServicefootere}>
                <p>Service client</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>
            
            <div className="soc">
                <p>Suivez-nous sur les réseaux sociaux</p>
               <p><FaFacebook /> Facebook</p> 
                <p><FaInstagram /> Instagram</p>
                <p><FaSnapchat /> Snapchat</p>
                <p><FaTiktok /> TikTok</p>
            </div>

            <div className={styles.lmjFooterElem}>
                <p>
                    Laissze votre email 📧
                    <input 
                        placeholder="Entrez votre email" value={inputValue}
                        onChange={handleInput}
                        onBlur={handleBlur}
                    />
                </p>
                <p>
                    Appelez-nous au 📞 01 23 45 67 89
                </p>
            </div>

            

            <div className={styles.lmjfooterCopyright}>
                <p>&copy; 🛖🥀La Maison Jungle 🌱. Tous droits réservés.</p>
            </div>

        </footer>
    )
}

export default Footer