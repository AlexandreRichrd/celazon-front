import { useState } from 'react';
import './styles.scss'

import { getModalStore } from '@store/modal.store';
import { getBrandStore } from '@store/brand.store';
import InputText from '@components/form/inputs/text/InputText';
import SecondaryBtn from '@components/buttons/secondary-btn';
import InputFile from '@components/form/inputs/files/InputFile';

const AddBrandModal = () => {
    const [title, setTitle] = useState<string>('')
    const [imageData, setImageData] = useState<string | null>(null);

    const modalStore = getModalStore();
    const brandStore = getBrandStore();
    
    const handleClose = () => {
        modalStore.close();
    }

    const handleCreateBrand = () => {
        console.log(title, imageData);
        brandStore.createBrand(title, imageData, 1);
        handleClose();
    }

    return(
        <div className="add-brand-modal-content">
            <div className="header">
                <div className="close">
                    <p onClick={handleClose}>X</p>
                </div>
                <h1>Création de marque</h1>
            </div>
            <div className="form-content">
                <InputText
                    type='text'
                    placeholder="Nom de votre marque"
                    id="brand"
                    label="Nom de votre marque"
                    value={title}
                    onChange={setTitle}
                />
                <InputFile onChange={setImageData}/>
            </div>
            <div className="container-btn">
                <SecondaryBtn event={() => handleCreateBrand()}>Créer une marque</SecondaryBtn>
            </div>
        </div>
    )
}

export default AddBrandModal;