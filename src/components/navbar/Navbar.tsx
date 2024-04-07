import LogoLine from "../icons/logo-line/LogoLine"
import type { ITab } from "../../interfaces/navbar.interface"
import './styles.scss'
import SearchBar from "../inputs/search-bar/SearchBar"
import CartIcon from "../icons/cart/CartIcon"
import { getAuthStore } from "../../store/auth.store"
import PrimaryBtn from "../buttons/primary-btn"
import { useState } from "react"
import Cart from "../home-page/cart/Cart"
import { Link } from "react-router-dom"
import { getModalStore } from "../../store/modal.store"
import ConnectionModal from "@components/modals/connection-modal"

const Navbar = () => {

    const tabs: ITab[] = [
        {
            tabName: "Accueil",
            target: "/"
        },
        {
            tabName: "Nos Produits",
            target: "/products"
        },
        {
            tabName: "Livraison",
            target: "/delivery"
        },
        {
            tabName: "À propos de nous",
            target: "/about"
        }
    ]

    const [isCartToggled, setIsCartToggled] = useState<boolean>(false);

    const authStore = getAuthStore();
    const modalStore = getModalStore();

    const connect = () => {
        modalStore.open({
            content: <ConnectionModal/>
        })
    }

    const checkAuthentication = () => {
        if (authStore.processAuth) {
            return <CartIcon event={()=>setIsCartToggled((precValue)=>!precValue)}/>
        } else {
            return <PrimaryBtn event={connect}>Se connecter</PrimaryBtn>
        }
    }

    const cart = () => {
        if(isCartToggled) {
            return(<Cart/>)
        }
    }

    
    
    return(
        <nav>
            <LogoLine/>
            <div className="right-part">
                <ul>
                    {tabs.map((tab, index) => {
                        return <li key={index}>
                                    <Link to={tab.target}>
                                        {tab.tabName}
                                    </Link>
                                </li>
                    })}
                </ul>
                <div className="interact">
                    <SearchBar/>
                    {checkAuthentication()}
                </div>
            </div>
            {cart()}
        </nav>
    )
}

export default Navbar