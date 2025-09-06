import { Component } from "react";
import { CreateOrder } from "./CreateOrder/CreateOrder";
import { CreateNewAcount } from "./CreateOrder/CreateNewAcountPage/CreateNewAcount";

export class CabinetPage extends Component {
    render() {
        return (
            <>
            <CreateOrder></CreateOrder>
            <CreateNewAcount></CreateNewAcount>
            </>
        )
    }
}