import { Component } from "react";
import { CreateOrder } from "./CreateOrder/CreateOrder";
import { CreateNewAcount } from "./CreateOrder/CreateNewAcountPage/CreateNewAcount";
import { Whishlist } from "./Wishlist/Wishlist";

export class CabinetPage extends Component {
  render() {
    return (
      <>
        <CreateOrder></CreateOrder>
        <CreateNewAcount></CreateNewAcount>
        <Whishlist />
      </>
    );
  }
}
