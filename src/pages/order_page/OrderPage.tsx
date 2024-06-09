import PrimaryBtn from "@components/buttons/primary-btn";
import CartCard from "@components/home-page/cart/cart-card";
import { getCartStore } from "@store/cart.store";
import { getProductStore } from "@store/product.store";
import { useEffect, useState } from "react";

import './styles.scss'
import InputText from "@components/form/inputs/text/InputText";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
    const [addresse, setAddresse] = useState('')
    const [fistname, setFistname] = useState('')
    const [lastname, setLastname] = useState('')


    const {cart, total} = getCartStore()
    const {order} = getProductStore()

    const navigate = useNavigate()

    const handleClick = async () => {
        const res = await order(cart, 1)
        if (res) {
            toast.success('Commande validée')
            navigate('/')
        }
    }

    return (
        <div id="order-page">
            <div className="cart">
                {cart.map((product) => (
                    <CartCard item={product} />
                ))}
                <p>Total: {total} €</p>
            </div>
            <div className="infos">
                <h1>Adresse de livraison</h1>
                <InputText id="firstname" placeholder="Prénom" type="text" label="Prénom" value={fistname} onChange={setFistname} />
                <InputText id="lastname" placeholder="Nom" type="text" label="Nom" value={lastname} onChange={setLastname} />
                <InputText id="addresse" placeholder="Addresse" type="text" label="Addresse" value={addresse} onChange={setAddresse} />
                <PrimaryBtn event={handleClick}>Valider</PrimaryBtn>
            </div>
        </div>
    );
}

export default OrderPage
