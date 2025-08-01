import s from "./CreateNewAcount.module.scss";
import { Container } from "../../../../components/Container/Container";

export const CreateNewAcount = () => {
  return (
    <>
      <section className={s.createAcountSecti}>
        <Container>
          <p className={s.createMainText}>Home / Create New Customer Account</p>
          <h2 className={s.createMainTitle}>Create New Customer Account</h2>
          <div className={s.createMainBox}>
            <form action="" className={s.form}>
              <h2 className={s.createPersonalText}>Personal Information</h2>
              <div className={s.createWrap}>
                <label className={s.create__label}>
                  First name <span className={s.create__required}>*</span>
                </label>
                <input
                  className={s.createInput}
                  type="email"
                  placeholder="daisy.watson@example.com"
                  required
                />
              </div>
              <div className={s.createWrap}>
                <label className={s.create__label}>
                    Last Name <span className={s.create__required}>*</span>
                </label>
                <input
                  className={s.createInput}
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <label className={s.create__labelSign}>
                <input type="radio" name="payment" value="card" />
                Sign Up for Newsletter
              </label>

              <h2 className={s.createPersonalTextSec}>Sign Up for Newsletter</h2>
              <div className={s.createWrap}>
                <label className={s.create__label}>
                  Email   <span className={s.create__required}>*</span>
                </label>
                <input
                  className={s.createInput}
                  type="email"
                  placeholder="daisy.watson@example.com"
                  required
                />
              </div>
              <div className={s.createWrap}>
                <label className={s.create__label}>
                    Password   <span className={s.create__required}>*</span>
                </label>
                <input
                  className={s.createInput}
                  type="password"
                  placeholder="Password"
                  required
                />
                </div>
                 <div className={s.createWrap}>
                <label className={s.create__label}>
                    Confirm Password   <span className={s.create__required}>*</span>
                </label>
                <input
                  className={s.createInput}
                  type="password"
                  placeholder=""
                  required
                />
              </div>
              <div className={s.btnWrap}>
                <button className={s.createBtn}>
                    create an account
                </button>
                <button className={s.backBtn}>
                    Back
                </button>
              </div>
            </form>
            
          </div>
        </Container>
      </section>
    </>
  );
};
