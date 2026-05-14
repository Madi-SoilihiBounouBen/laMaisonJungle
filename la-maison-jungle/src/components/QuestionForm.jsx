import { useState } from 'react'

import styles from '../styles/QuestionForm.module.css'

const QuestionForm = () => {
    const [inputValue, setInputValue] = useState('')

    const checkValue = (value) => {
        if (!value.includes('p')) {
            setInputValue(value)
        }
    }
    return (
        <div>

           <textarea 
           value={inputValue} 
           placeholder="Taper votre texte"
           onChange={(event) => checkValue(event.target.value)} 
            />

            <button className={styles.lmjButtonSend} onClick={() => alert(inputValue)}>
                Envoyer
            </button>

        </div>




    
    )
}

export default QuestionForm
