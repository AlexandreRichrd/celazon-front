import type { IBackOfficeProductTabHeader } from '@interfaces/product.interface'

import './styles.scss'

import BackOfficeTable from '@components/back-office/back-office-table/BackOfficeTable'
import { getBrandStore } from '@store/brand.store'
import { getModalStore } from '@store/modal.store'
import AddBrandModal from '@components/modals/add-brand-modal/AddBrandModal'


const BackOfficeBrand = () => {
    const header: IBackOfficeProductTabHeader[] = [
        {
            name: 'ID',
            hasInput: false
        },
        {
            name: 'Image',
            hasInput: true,
            placeholder: 'Entrez une marque'
        },
        {
            name: 'Nom',
            hasInput: false
        }
    ]

    const {brands} = getBrandStore()
    const modalStore = getModalStore()

    const handleOpen = () => {
        modalStore.open({content: <AddBrandModal />})
    }

    const handleClick = (id: number) => {
        alert(id)
    }
    

    return (
        <div id="back-office-brand">
            <div className="brand-back-office-top">
                <h1>Brand</h1>
                <button onClick={handleOpen}>click me</button>
            </div>
            <BackOfficeTable headers={header} type='brands' brands={brands} event={handleClick}/>
        </div>
    )
}

export default BackOfficeBrand