const quantityLabel = {
    1: 'Peu',
    2: 'Modérément',
    3: 'Beaucoup',
    4: 'à la folie',
    5: 'passionnément',
    6: 'infiniment'
}

const CareScale = ({ scaleValue, careType }) => {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? '🔆' : '💦'

    return (
        <div 
        onClick={() => {
            alert(`Cette plante a besoin de ${quantityLabel[scaleValue]} ${careType === "light" ? "de lumière" : "d'arrosage"}`)
        }}
        >
            {range.map((rangeElement) =>
                scaleValue >= rangeElement ? (
                    <span key={rangeElement.toString()}>{scaleType}</span>
                ) : null
            )}
        </div>
    )
}

export default CareScale
