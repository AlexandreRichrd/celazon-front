import { FC } from 'react'
import './styles.scss'

import BackOfficeProductsTable from './products-table/BackOfficeProductsTable'

const BackOfficeProducts: FC = () => {
    //https://www.ideveloppement.fr/expertises/creation-site-internet/interface-back-office.html

    return (
        <div id="back-office-products">
            <h1>Products</h1>
            <BackOfficeProductsTable />
        </div>
    )
}

export default BackOfficeProducts