import { FC } from 'react'
import type { IBackOfficeProductTabHeader } from '@interfaces/product.interface'

import './styles.scss'

import BackOfficeTable from '@components/back-office/back-office-table/BackOfficeTable'
import { getProductStore } from '@store/product.store'
import AddProductModal from '@components/modals/add-product-modal/AddProductModal'
import { getModalStore } from '@store/modal.store'
import SecondaryBtn from '@components/buttons/secondary-btn'

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
    const modalStore = getModalStore()

    const toggleModale = () => {
        modalStore.open({content: <AddProductModal />})
    }   
    return (
        <div id="back-office-products">
            <div className="top-products">
                <h1>Products</h1>
                <div className="top-products-btn">
                    <SecondaryBtn event={toggleModale}>Ajouter un produit +</SecondaryBtn>
                </div>
            </div>
            <BackOfficeTable products={products} headers={headers} type='products'/>
        </div>
    )
}

export default BackOfficeProducts