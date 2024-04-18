import { FC } from 'react'
import type { IBackOfficeProductTabHeader } from '@interfaces/product.interface'

import './styles.scss'

import BackOfficeTable from '@components/back-office/back-office-table/BackOfficeTable'
import { getProductStore } from '@store/product.store'

const BackOfficeProducts: FC = () => {
    const headers: IBackOfficeProductTabHeader[] = [
        {
            name: 'ID',
            hasInput: false
        },
        {
            name: 'Cover',
            hasInput: false
        },
        {
            name: 'Title',
            hasInput: true,
            placeholder: 'Entrez un nom'
        },
        {
            name: 'Brand',
            hasInput: true,
            placeholder: 'Entrez une marque'
        },
        {
            name: 'Category',
            hasInput: true,
            placeholder: "Entrez le nom d'une catégorie"
        },
        {
            name: 'Score',
            hasInput: false
        }
    ]
    const {products} = getProductStore()
    return (
        <div id="back-office-products">
            <h1>Products</h1>
            <BackOfficeTable products={products} headers={headers} type='products'/>
        </div>
    )
}

export default BackOfficeProducts