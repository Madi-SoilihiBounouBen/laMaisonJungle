/**
 * ShoppingList est un composant qui affiche la liste des plantes
 */

import styles from '../styles/ShoppingList.module.css';
import PlantItem from './PlantItem';

// Importez les images des plantes
import montseraImg from '../assets/alice-brie.jpg';
import ficusImg from '../assets/ficus-lyarata.png';
import pothosImg from '../assets/pothos-argente.png';
import yuccoImg from '../assets/yucco.png';
import palmierImg from '../assets/palmier.png';

// Liste des plantes avec toutes les informations necessaires
const planList = [
    {
        name: 'monstera',
        category: 'Local',
        id: '1',
        isBestSale: true,
        isSpecialOffer: true,
        water: 3,
        light: 1,
        price: 8,
        cover: montseraImg
    },
    {
        name: 'ficus lyarata',
        category: 'Local',
        id: '2',
        isBestSale: false,
        isSpecialOffer: false,
        water: 2,
        light: 5,
        price: 10,
        cover: ficusImg
    },
    {
        name: 'pothos argenté',
        category: 'Local',
        id: '3',
        isBestSale: false,
        isSpecialOffer: false,
        water: 3,
        light: 5,
        price: 15,
        cover: pothosImg
    },
    {
        name: 'yucco',
        category: 'Importer',
        id: '4',
        isBestSale: false,
        isSpecialOffer: false,
        water: 6,
        light: 5,
        price: 20,
        cover: yuccoImg
    },
    {
        name: 'palmier',
        category: 'Importer',
        id: '5',
        isBestSale: false,
        isSpecialOffer: false,
        water: 2,
        light: 3,
        price: 25,
        cover: palmierImg
    }
];

const ShoppingList = ({ updateCart }) => {
    return (
        <ul className={styles.lmjPlantList}>
            {planList.map(({ id, name, cover, water, light, isBestSale, category, isSpecialOffer, price }) => (
                <PlantItem
                    key={id}
                    id={id}
                    name={name}
                    cover={cover}
                    water={water}
                    light={light}
                    isBestSale={isBestSale}
                    category={category}
                    isSpecialOffer={isSpecialOffer}
                >
                    {/* Affiche le prix de la plante dans la carte produit. */}
                    <span className={styles.plantPrice}>{price} €</span>

                    {/* Ce bouton ajoute la plante actuelle dans le panier partage avec Cart. */}
                    <button
                        className={styles.lmjbuttonAddProduit}
                        // Je garde les anciens produits et J'ajoute le nom + le prix de cette plante. les 3 points permettent de garder les anciens produits dans le panier et d'ajouter le nouveau produit sans les supprimer.
                        onClick={() => updateCart((currentCart) => [...currentCart, { name, price }])}
                    >
                        Ajouter au panier
                    </button>
                </PlantItem>
            ))}
        </ul>
    );
};

export default ShoppingList;
