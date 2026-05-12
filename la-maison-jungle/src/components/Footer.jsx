import { useState } from 'react'

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
            <div className={styles.lmjfooterelem}>
                <p>&copy; 🛖🥀La Maison Jungle 🌱. Tous droits réservés.</p>
            </div>

            <div className="lmj-footer-elem">
                <p>Laissze votre email 📧</p>
            </div>
            <input 
            placeholder="Entrez votre email" value={inputValue}
            onChange={handleInput}
            onBlur={handleBlur}
            />

        </footer>
    )
}

export default Footer