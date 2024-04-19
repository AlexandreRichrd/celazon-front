import { useState } from 'react'
import './styles.scss'
import { getModalStore } from '@store/modal.store'
import InputText from '@components/form/inputs/text'
import InputFile from '@components/form/inputs/files'
import SecondaryBtn from '@components/buttons/secondary-btn'
import { getProductStore } from '@store/product.store'
import Select from '@components/form/inputs/select'
import { getBrandStore } from '@store/brand.store'


const AddProductModal = () => {
    const [title, setTitle] = useState<string>('')
    const [imageData, setImageData] = useState<string | null>(null);
    const [brandId, setBrandId] = useState<number>(1);
    const [productTypeId, setProductTypeId] = useState<number>(1);
    const [price, setPrice] = useState<number>(1);

    const modalStore = getModalStore();
    const productStore = getProductStore();
    const { brands } = getBrandStore();
    
    const handleClose = () => {
        modalStore.close();
    }

    const handleCreateProduct = () => {
        console.log(title, imageData);
        productStore.createProduct(title, imageData, brandId, productTypeId, price);
        handleClose();
    }
    return(
        <div className="add-brand-modal-content">
            <div className="header">
                <div className="close">
                    <p onClick={handleClose}>X</p>
                </div>
                <h1>Création de produit</h1>
            </div>
            <div className="form-content">
                <InputText
                    type='text'
                    placeholder="Nom de votre produit"
                    id="brand"
                    label="Nom de votre produit"
                    value={title}
                    onChange={setTitle}
                />
                <InputFile onChange={setImageData}/>
                <Select label="Marque" brands={brands} onChange={setBrandId}/>
                <InputText type='number' placeholder="Prix" id="price" label="Prix" value={price} onChange={setPrice}/>
            </div>
            <div className="container-btn">
                <SecondaryBtn event={() => handleCreateProduct()}>Créer un produit</SecondaryBtn>
            </div>
        </div>
    )
}

export default AddProductModal