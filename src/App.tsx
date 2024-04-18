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
import BackOfficeProducts from "@pages/back-office/products/BackOfficeProducts";
import BackOfficeBrands from "@pages/back-office/brand/Brand";
import { BrandStoreContext, useBrandStore } from "@store/brand.store";

function App() {
  const productStore = useProductStore();
  const authStore = useAuthStore();
  const cartStore = useCartStore();
  const modalStore = useModalStore();
  const brandStore = useBrandStore();

  return (
    <ProductStoreContext.Provider value={productStore}>
      <AuthStoreContext.Provider value={authStore}>
        <CartStoreContext.Provider value={cartStore}>
          <ModalStoreContext.Provider value={modalStore}>
            <BrandStoreContext.Provider value={brandStore}>
              <Router>
                <Modal />
                <Navbar/>
                <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/products" element={<ProductPage/>}/>
                  <Route path="back-office" element={<BackOffice/>}>
                    <Route path="products" element={<BackOfficeProducts/>}/>
                    <Route path="brands" element={<BackOfficeBrands/>}/>
                  </Route>
                  <Route path="*" element={<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGo3eGRueTFxd3hwaTZrNWV6cXZxYjZoajl1Ym54cWNxNmpsc2wzbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UHAYP0FxJOmFBuOiC2/giphy.gif"/>}/>
                </Routes>
              </Router>
            </BrandStoreContext.Provider>
          </ModalStoreContext.Provider>
        </CartStoreContext.Provider>
      </AuthStoreContext.Provider>
    </ProductStoreContext.Provider>
  )
}

export default App
