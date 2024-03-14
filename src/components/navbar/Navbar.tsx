import LogoLine from "../icons/logo-line/LogoLine"
import type { ITab } from "../../interfaces/navbar.interface"
import './styles.scss'
import SearchBar from "../inputs/search-bar/SearchBar"
import CartIcon from "../icons/cart/CartIcon"

const Navbar = () => {

    const tabs: ITab[] = [
        {
            tabName: "Accueil",
            target: "home"
        },
        {
            tabName: "Nos Produits",
            target: "products"
        },
        {
            tabName: "Livraison",
            target: "delivery"
        },
        {
            tabName: "À propos",
            target: "about"
        }
    ]
    
    return(
        <nav>
            <LogoLine/>
            <div className="right-part">
                <ul>
                    {tabs.map((tab, index) => {
                        return <li key={index}>{tab.tabName}</li>
                    })}
                </ul>
                <div className="interact">
                    <SearchBar/>
                    <CartIcon/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar