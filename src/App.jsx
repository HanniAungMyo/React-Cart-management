import React, { useContext } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import ProductGroup from "./components/ProductGroup";
import Footer from "./components/Footer";
import CategoryGroup from "./components/CategoryGroup";
import Spacer from "./components/Spacer";
import Cartdrawer from "./components/Cartdrawer";
import { DataContext } from "./context/DataContext";

const App = () => {
  const { cartDrawer } = useContext(DataContext);
  return (
    <Layout>
      <Header />
      <Spacer size={100} />
      <CategoryGroup />
      <ProductGroup />
      <Footer />
      {cartDrawer && <Cartdrawer />}
    </Layout>
  );
};

export default App;
