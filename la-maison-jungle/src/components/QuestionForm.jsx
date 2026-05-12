import { useState } from 'react'

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

            <button onClick={() => alert(inputValue)}>
                Envoyer
            </button>

        </div>




    
    )
}

export default QuestionForm
