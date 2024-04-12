import { ProductStoreContext, useProductStore } from "./store/product.store"
import { AuthStoreContext, useAuthStore } from "./store/auth.store";
import { CartStoreContext, useCartStore } from "./store/cart.store";
import { ModalStoreContext, useModalStore } from "./store/modal.store";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/nav/navbar"
import HomePage from "./pages/home-page"
import ProductPage from "./pages/products-page";
import BackOffice from "@pages/back-office/BackOffice";
import Modal from "@components/modals/Modal";

function App() {
  const productStore = useProductStore();
  const authStore = useAuthStore();
  const cartStore = useCartStore();
  const modalStore = useModalStore();

  return (
    <ProductStoreContext.Provider value={productStore}>
      <AuthStoreContext.Provider value={authStore}>
        <CartStoreContext.Provider value={cartStore}>
          <ModalStoreContext.Provider value={modalStore}>
            <Router>
              <Modal />
              <Navbar/>
              <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/products" element={<ProductPage/>}/>
                <Route path="back-office" element={<BackOffice/>}/>
                <Route path="*" element={<h1>404</h1>}/>
              </Routes>
            </Router>
          </ModalStoreContext.Provider>
        </CartStoreContext.Provider>
      </AuthStoreContext.Provider>
    </ProductStoreContext.Provider>
  )
}

export default App
