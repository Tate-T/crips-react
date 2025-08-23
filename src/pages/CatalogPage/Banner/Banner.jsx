import "./Banner.scss";
import { Container } from '../../../components/Container/Container'
import { Component } from "react";

export default class Banner extends Component {
  render = () => (
    <div className="banner">
      <Container>
        <div className="banner__container">
          <div className="banner__content">
            <h1 className="banner__title">shoping without limits.</h1>
            <p className="banner__subtitle-d">
              You can choose the best option for you, and it does not matter
              whether you are in Prague or San Francisco. We will deliver your
              purchase anywhere!
            </p>
            <p className="banner__subtitile">
              Choose the best option for you, and it does not matter whether you
              are.
            </p>
            <button className="banner__btn">Shop Now</button>
          </div>
        </div>
      </Container>
    </div>
  );
};
