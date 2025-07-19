export const AddNewAddress = () => {
  return (
    <section>
      <div>
        <h2>Home / Create New Customer Account</h2>
        <h1>Add New Address</h1>
        <div>
          <form>
            <div>
              <h3>Contact Information</h3>
              <label>
                <p>
                  First name <span>*</span>
                </p>
                <input
                  type="text"
                  name="user-firstname"
                  id="user-firstname"
                  required
                  placeholder="Alex"
                />
              </label>
              <label>
                <p>
                  Last Name <span>*</span>
                </p>
                <input
                  type="text"
                  name="user-lastname"
                  id="user-lastname"
                  required
                  placeholder="Driver"
                />
              </label>
              <label>
                <p>Company</p>
                <input
                  type="text"
                  name="user-company"
                  id="user-company"
                  placeholder=""
                />
              </label>
              <label>
                <p>
                  Phone Number <span>*</span>
                </p>
                <input
                  type="tel"
                  name="user-phone"
                  id="user-phone"
                  required
                  placeholder=""
                />
              </label>
              <label>
                <p>Fax</p>
                <input
                  type="text"
                  name="user-fax"
                  id="user-fax"
                  placeholder=""
                />
              </label>
            </div>
            <div>
              <h3>Address</h3>
              <label>
                <p>
                  Street Address <span>*</span>
                </p>
                <input
                  type="text"
                  name="user-streetaddress"
                  id="user-streetaddress"
                  required
                  placeholder=""
                />
              </label>
              <label>
                <p>
                  Country <span>*</span>
                </p>
                <select required name="user-country" id="user-country">
                  <option value="fr">France</option>
                  <option value="ua">Ukraine</option>
                  <option value="uk">United Kingdom</option>
                  <option value="us">United States</option>
                </select>
              </label>
              <label>
                <p>
                  State/Province <span>*</span>
                </p>
                <select required name="user-state" id="user-state">
                  <option value="Kyiv">Kyiv</option>
                  <option value="Lviv">Lviv</option>
                  <option value="Kharkiv">Kharkiv</option>
                  <option value="Rivne">Rivne</option>
                </select>
              </label>
              <label>
                <p>
                  Zip/Postal Code <span>*</span>
                </p>
                <input
                  type="num"
                  name="user-code"
                  id="user-code"
                  required
                  placeholder=""
                />
              </label>
            </div>
            <button type="submit">Save Adress</button>
          </form>
        </div>
      </div>
    </section>
  );
};
