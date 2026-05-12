import CareScale from './CareScale'

import styles from '../styles/PlantItem.module.css'

const PlantItem = ({ id, cover, name, water, light, isBestSale, category, isSpecialOffer }) => {
    const handleClick = (event, plantName) => {
        event.preventDefault()
        console.log("Je clique sur mon evenement :", plantName);
    }

    return (
        <li key={id} className={styles.lmjPlantItem} onClick={(event) => handleClick(event, name)}>
            <img className={styles.lmjPlantItemCover} src={cover} alt={`${name} cover`} />
            {name}

            <div className={styles.careScales}>
                <CareScale careType="water" scaleValue={water} />
                <CareScale careType="light" scaleValue={light} />
            </div>

            {isSpecialOffer && <span className={styles.lmjSales}>Solde</span>}

            <span className={`${styles.category} ${category === 'Local' ? styles.local : styles.importer}`}>
                {category}
            </span>
        </li>
    )
}

export default PlantItem
