export const addAddress = (
  id,
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
) => {
  return {
    type: "address/addAddress",
    payload: {
      id,
      address: {
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
      },
    },
  };
};
