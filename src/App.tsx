import { ProductStoreContext, useProductStore } from "./store/product.store"
import { AuthStoreContext, useAuthStore } from "./store/auth.store";
import { CartStoreContext, useCartStore } from "./store/cart.store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar"
import HomePage from "./pages/home-page"
import ProductPage from "./pages/products-page";


function App() {
  const productStore = useProductStore();
  const authStore = useAuthStore();

  return (
    <ProductStoreContext.Provider value={productStore}>
      <AuthStoreContext.Provider value={authStore}>
        <CartStoreContext.Provider value={useCartStore()}>
          <Router>
          <Navbar/>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/products" element={<ProductPage/>}/>
            </Routes>
          </Router>
        </CartStoreContext.Provider>
      </AuthStoreContext.Provider>
    </ProductStoreContext.Provider>
  )
}

export default App
