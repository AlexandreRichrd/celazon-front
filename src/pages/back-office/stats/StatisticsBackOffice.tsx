import { useProductStore } from '@store/product.store';
import './styles.scss'
import { useEffect, useState } from 'react';

const StatisticsBackOffice = () => {

    const {traffic, products, fetchProducts} = useProductStore()
    const [trafficCount, setTrafficCount] = useState<any>(0)

    useEffect(() => {
        fetchProducts()
    }, [])

    const getMostVisitedProduct = products.find(product => product.id === traffic[0].product_id);

    
    return (
        <div id="statistics-back-office">
            <h1>Statistiques sur le traffic</h1>
            <p>Produit le plus visité: {getMostVisitedProduct ? getMostVisitedProduct.title : 'Aucun produit trouvé'}</p>
            <p>Nombre de vue des articles: {trafficCount}</p>
        </div>
    )
}

export default StatisticsBackOffice;