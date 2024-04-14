import { FC } from 'react'
import './styles.scss'

const BackOfficeProductsTable: FC = () => {
    const products = [
        {
            id: 0,
            cover: 'https://images-eu.ssl-images-amazon.com/images/I/61LaIVlVOwL._AC_UL116_SR116,116_.jpg',
            title: 'title',
            category: 'catégorie',
            brand: 'marque',
            score: 4
        },
        {
            id: 1,
            cover: 'https://images-eu.ssl-images-amazon.com/images/I/61LaIVlVOwL._AC_UL116_SR116,116_.jpg',
            title: 'title',
            category: 'catégorie',
            brand: 'marque',
            score: 4
        },
        {
            id: 2,
            cover: 'https://images-eu.ssl-images-amazon.com/images/I/61LaIVlVOwL._AC_UL116_SR116,116_.jpg',
            title: 'title',
            category: 'catégorie',
            brand: 'marque',
            score: 4
        },
        {
            id: 3,
            cover: 'https://images-eu.ssl-images-amazon.com/images/I/61LaIVlVOwL._AC_UL116_SR116,116_.jpg',
            title: 'title',
            category: 'catégorie',
            brand: 'marque',
            score: 4
        },
    ]
    return (
        <table id='back-office-products-table'>
            <tr>
                <th>id</th>
                <th>image</th>
                <th>nom</th>
                <th>marque</th>
                <th>categorie</th>
                <th>score</th>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>
                    <input type="text" name="" id="" placeholder='Entrez un nom' />
                </td>
                <td>
                    <input type="text" name="" id="" placeholder='Entrez une marque' />
                </td>
                <td>
                    <input type="text" name="" id="" placeholder="Entrez le nom d'une catégorie" />
                </td>
                <td></td>
            </tr>
            {products.map(product => {
                return(
                    <tr>
                        <td>{product.id}</td>
                        <td><img src={product.cover} alt={product.title} /></td>
                        <td>{product.title}</td>
                        <td>{product.brand}</td>
                        <td>{product.category}</td>
                        <td>{product.score}</td>
                    </tr>
                )
            })}

        </table>
    )
}

export default BackOfficeProductsTable