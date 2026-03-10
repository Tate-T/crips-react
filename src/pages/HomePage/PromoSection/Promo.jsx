import "./Promo.scss";
import { Container } from "../../../components/Container/Container";
import promoImage from "./promo-banner.png";
export const Promo = () => {
  return (
    <section className="promo">
      <Container>
        <div className="promo__box">
        <img src={promoImage} alt="Promo Banner" className="promo__image" />

        <div className="promo__content">
          <h2 className="promo__title">EXPLORE THE BEST OF YOU.</h2>

          <p className="promo__subtitle">
            You can choose the best option for you, and it does not matter
            whether you are in Prague or San Francisco.
          </p>

          <button className="promo__btn">Shop Now</button>
        </div>
        </div>
      </Container>
    </section>
  );
};
