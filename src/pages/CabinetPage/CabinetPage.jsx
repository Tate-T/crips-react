import { Component } from "react";
import { CreateOrder } from "./CreateOrder/CreateOrder";
import { CreateNewAcount } from "./CreateOrder/CreateNewAcountPage/CreateNewAcount";
import { Wishlist } from "./Wishlist/Wishlist";

import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export class CabinetPage extends Component {
  render() {
    return (
      <>
        <Header />
        <CreateOrder></CreateOrder>
        {/* <CreateNewAcount></CreateNewAcount> */}
        {/* <Wishlist /> */}
        <Footer/>
      </>
    );
  }
}
