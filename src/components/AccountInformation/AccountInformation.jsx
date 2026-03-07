import { Container } from "../../../../components/Container/Container";
import NavBar from "../../../../components/NavBar/NavBar";

export const AccountInformation = () => {
  return (
    <section>
      <Container>
        <p>Home / My Dashboard</p>
        <h2>Edit Account Information</h2>
        <div>
          <div>
            <NavBar />
            <form>
              <h2>Account Information</h2>
              <label>
                First name *
                <input required type="text" />
              </label>
              <label>
                Last Name *
                <input required type="text" />
              </label>
              <label>
                Email
                <input required type="email" />
              </label>
              <label>
                Password
                <input required type="password" />
              </label>
              <label>
                <input required type="checkbox" />
                Change Email
              </label>
              <label>
                <input required type="checkbox" />
                Change Password
              </label>
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
