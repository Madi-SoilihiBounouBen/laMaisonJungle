/**
 * ShoppingList est un composant qui affiche la liste des plantes
 */

import styles from '../styles/ShoppingList.module.css';
import CareScale from './CareScale';

// Importez les images des plantes
import montseraImg from '../assets/alice-brie.jpg';
import ficusImg from '../assets/ficus-lyarata.png';
import pothosImg from '../assets/pothos-argente.png';
import yuccoImg from '../assets/yucco.png';
import palmierImg from '../assets/palmier.png';

// Liste des plantes avec toutes les informations nécessaires
const planList = [
    {
        name: 'monstera',
        category: 'Local',
        id: '1',
        isBestSale: true,
        isSpecialOffer: true,
        water: 3,
        light: 1,
        image: montseraImg
    },
    {
        name: 'ficus lyarata',
        category: 'Local',
        id: '2',
        isBestSale: false,
        isSpecialOffer: false,
        water: 2,
        light: 5,
        image: ficusImg
    },
    {
        name: 'pothos argenté',
        category: 'Local',
        id: '3',
        isBestSale: false,
        isSpecialOffer: false,
        water: 3,
        light: 5,
        image: pothosImg
    },
    {
        name: 'yucco',
        category: 'Importer',
        id: '4',
        isBestSale: false,
        isSpecialOffer: false,
        water: 6,
        light: 5,
        image: yuccoImg
    },
    {
        name: 'palmier',
        category: 'Importer',
        id: '5',
        isBestSale: false,
        isSpecialOffer: false,
        water: 2,
        light: 3,
        image: palmierImg
    }
];

// Composant ShoppingList qui affiche une liste de plantes
const ShoppingList = () => {
    return (
        <ul className={styles.lmjPlantList}>
            {planList.map((plant) => (
                <li key={plant.id} className={styles.lmjPlantItem}>
                    <div className={styles.plantImage}>
                        <img 
                            src={plant.image} 
                            alt={`Image de ${plant.name}`} 
                            className={styles.plantLogo} 
                        />
                    </div>

                    <div className={styles.plantInfo}>
                        <h3 className={styles.plantName}>{plant.name}</h3>
                        
                        <div className={styles.plantRating}>
                            <span className={styles.bestSaleIcon}>
                                {plant.isBestSale ? '👌' : '😒'}
                            </span>
                        </div>

                        {plant.isSpecialOffer && (
                            <span className={styles.lmjSales}>Solde</span>
                        )}

                        <div className={styles.careScales}>
                            <CareScale careType='light' scaleValue={plant.light} />
                            <CareScale careType='water' scaleValue={plant.water} />
                        </div>

                        <span className={`${styles.category} ${plant.category === 'Local' ? styles.local : styles.importer}`}>{plant.category}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ShoppingList;