import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx").then(module => ({ default: module.HomePage  })));
const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage.jsx").then(module => ({ default: module.ProductPage })));
const ArticlePage = lazy(() => import("./pages/ArticlePage/ArticlePage.jsx").then(module => ({ default: module.ArticlePage  })));
const CartPage = lazy(() => import("./pages/CartPage/CartPage.jsx").then(module => ({ default: module.CartPage })));
const CabinetPage = lazy(() => import("./pages/CabinetPage/CabinetPage.jsx").then(module => ({ default: module.CabinetPage })));
const DashboardPage  = lazy(() => import("./pages/Cabinet/DashboardPage/DashboardPage.jsx").then(module => ({ default: module.DashboardPage })));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx").then(module => ({ default: module.CatalogPage })));
const Dashboard = lazy(() => import("./pages/Cabinet/DashboardPage/Dashboard/Dashboard.jsx").then(module => ({ default: module.Dashboard })));
const AddNewAddress = lazy(() => import("./pages/Cabinet/DashboardPage/AddNewAddress/AddNewAddress.jsx").then(module => ({ default: module.AddNewAddress })));
const Wishlist = lazy(() => import("./pages/CabinetPage/Wishlist/Wishlist.jsx").then(module => ({ default: module.Wishlist })));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx").then(module => ({ default: module.LoginPage })));

import { Routes, Route } from "react-router-dom";

function App() {
  return (
     <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<HomePage />}>
          <Route path="accountdashboard" element={<Dashboard />} />
          {/* <Route path="accountinformation" element={}/> */}
          <Route path="addressbook" element={<AddNewAddress />} />
          {/* <Route path="myorders" element={}/> */}
          <Route path="mywishlist" element={<Wishlist />} />
          {/* <Route path="newslettersubscriptions" element={}/> */}
        </Route>
        <Route path="/articlepage" element={<ArticlePage />} />
        <Route path="/catalogpage" element={<CatalogPage />} />
        <Route path="/catalogpage/:productId" element={<ProductPage />} />

        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/articlepage" element={<ArticlePage />} />
        <Route path="/cabinetpage" element={<CabinetPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/dashboardpage" element={<DashboardPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
