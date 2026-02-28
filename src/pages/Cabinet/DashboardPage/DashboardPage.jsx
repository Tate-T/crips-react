import { Dashboard } from "./Dashboard/Dashboard.jsx";
import { AddNewAddress } from "./AddNewAddress/AddNewAddress.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL =
  "https://68d9013490a75154f0d9471b.mockapi.io/crips-practice";

export const DashboardPage = ({}) => {
  const [page, setPage] = useState("dashSide1");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [fax, setFax] = useState("");
  const [streetaddress, setStreetaddress] = useState("");
  const [streetaddress2, setStreetaddress2] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [code, setCode] = useState("");
  const [isInArray, setIsInArray] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setFirstName(e.target.firstName.value);
    setLastName(e.target.lastName.value);
    setCompany(e.target.company.value);
    setPhone(e.target.phone.value);
    setFax(e.target.fax.value);
    setStreetaddress(e.target.streetaddress.value);
    setStreetaddress2(e.target.streetaddress2.value);
    setCountry(e.target.country.value);
    setState(e.target.state.value);
    setCode(e.target.code.value);
  };

  useEffect(() => {
    if (!phone) return;
    const fetchAndPostUser = async () => {
      try {
        const request = await axios.get("/users");

        const userExists = request.data.some(
          (user) => user.contact.phone === phone
        );

        if (!userExists) {
          setIsInArray(false);

          await axios.post("/users", {
            contact: {
              firstName,
              lastName,
              company,
              phone,
              fax,
            },
            address: {
              streetaddress,
              streetaddress2,
              country,
              state,
              code,
            },
            basket: [],
          });
        } else {
          setIsInArray(true);
        }
      } catch (e) {
        console.error("Помилка при запиті:", e);
      }
    };
    fetchAndPostUser();
  }, [
    firstName,
    lastName,
    company,
    phone,
    fax,
    streetaddress,
    streetaddress2,
    country,
    state,
    code,
  ]);

  const changePage = (e) => {
    let elem = e.target;
    if (e.target.nodeName === "A") {
      elem = e.target.parentElement;
    }
    setPage(elem.id);
  };

  return (
    <>
      <main>
        <Dashboard changePage={changePage} />

        <AddNewAddress
          isInArray={isInArray}
          submitForm={submitForm}
          firstName={firstName}
          lastName={lastName}
          company={company}
          phone={phone}
          fax={fax}
          streetaddress={streetaddress}
          streetaddress2={streetaddress2}
          country={country}
          state={state}
          code={code}
          changePage={changePage}
        />
      </main>
    </>
  );
};
