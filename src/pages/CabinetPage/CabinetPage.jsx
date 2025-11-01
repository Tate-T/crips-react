import { Component } from "react";
import { CreateOrder } from "./CreateOrder/CreateOrder";
import { CreateNewAcount } from "./CreateOrder/CreateNewAcountPage/CreateNewAcount";
import { Whishlist } from "./Wishlist/Wishlist";

import { Header } from "../../components/Header/Header";

export class CabinetPage extends Component {
  render() {
    return (
      <>
		<Header />
        <CreateOrder></CreateOrder>
        <CreateNewAcount></CreateNewAcount>
        <Whishlist />
      </>
    );
  }
}
