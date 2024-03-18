import Navbar from "./components/navbar"
import CoffeeBean from "./components/icons/coffee-bean"
import CoffeeBeanBot from "./components/icons/coffee-bean-bot/CoffeeBeanBot"
import HomePage from "./pages/home-page"
import { ProductStoreContext, useProductStore } from "./store/product.store"


function App() {
  const productStore = useProductStore();

  return (
    <ProductStoreContext.Provider value={productStore}>
      <Navbar/>
      <CoffeeBean/>
      <HomePage/>
      <CoffeeBeanBot/>
    </ProductStoreContext.Provider>
  )
}

export default App
