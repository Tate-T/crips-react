import { Header } from "../../../components/Header/Header.jsx";
import { Dashboard } from "./Dashboard/Dashboard.jsx";
import { AddNewAddress } from "./AddNewAddress/AddNewAddress.jsx";
import { Footer } from "../../../components/Footer/Footer.jsx";
import { Component } from "react";

export class DashboardPage extends Component {
  state = {
    page: "dashSide1",
    contact: {
      firstName: "",
      lastName: "",
      company: "",
      phone: "",
      fax: "",
    },
    address: {
      streetaddress: "",
      streetaddress2: "",
      country: "",
      state: "",
      code: "",
    },
  };

  submitForm = (e) => {
    e.preventDefault();
    this.setState({
      contact: {
        firstName: e.target.userfirstname.value,
        lastName: e.target.userlastname.value,
        company: e.target.usercompany.value,
        phone: e.target.userphone.value,
        fax: e.target.userfax.value,
      },
      address: {
        streetaddress: e.target.userstreetaddress.value,
        streetaddress2: e.target.userstreetaddress2.value,
        country: e.target.usercountry.value,
        state: e.target.userstate.value,
        code: e.target.usercode.value,
      },
    });
  };

  changePage = (e) => {
    let elem = e.target;
    if (e.target.nodeName === "A") {
      elem = e.target.parentElement;
    }
    this.setState({ page: elem.id });
  };

  render() {
    return (
      <>
        {/* <Header /> */}
        <main>
          {this.state.page === "dashSide1" ? (
            <Dashboard changePage={this.changePage} />
          ) : (
            ""
          )}
          {this.state.page === "dashSide3" ? (
            <AddNewAddress
              submitForm={this.submitForm}
              contact={this.state.contact}
              address={this.state.address}
              changePage={this.changePage}
            />
          ) : (
            ""
          )}
        </main>
        {/* <Footer /> */}
      </>
    );
  }
}
