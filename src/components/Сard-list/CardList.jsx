import style from "./CardList.module.scss"
import { Container } from "../Container/Container"
import photo1 from "../../images/cardlist/card-list-1.webp"
import photo2 from "../../images/cardlist/card-list-2.webp"
import photo3 from "../../images/cardlist/card-list-3.webp"
import photo4 from "../../images/cardlist/card-list-4.webp"
import photo5 from "../../images/cardlist/card-list-5.webp"
import photo6 from "../../images/cardlist/card-list-6.webp"
import photo7 from "../../images/cardlist/card-list-7.webp"
import photo8 from "../../images/cardlist/card-list-8.webp"
import photo9 from "../../images/cardlist/card-list-9.webp"
import photo10 from "../../images/cardlist/card-list-10.webp"
import photo11 from "../../images/cardlist/card-list-11.webp"
import photo12 from "../../images/cardlist/card-list-12.webp"
import { Component } from "react"

export class CardList extends Component  {
    render( ) {
        return (
        <section className={style.cardlist}>
            <Container>
                <ul className={style.cardlist__list}>
                    <li className={style.cardlist__item}>
                        <img className={style.cardlist__img} src={photo1} alt="#" />
                        <h3 className={style.cardlist__title}>TOP WOMEN</h3>
                        <p className={style.cardlist__subtitle}>Angels malu zip jeans slim black used</p>
                        <p className={style.cardlist__price}>139,00 EUR</p>
                        <div className={style.cardlist__color_1}>123</div>
                    <div className={style.cardlist__color_2}>123</div>
                    <div className={style.cardlist__color_3}>123</div>
                    </li>
                    <li className={style.cardlist__item}>
                        <img className={style.cardlist__img} src={photo2}  alt="#" />
                        <h3 className={style.cardlist__title}>TOP WOMEN</h3>
                        <p className={style.cardlist__subtitle}>Angels malu zip jeans slim black used</p>
                        <p className={style.cardlist__price}>139,00 EUR</p>
                        {/* <div className={style.cardlist__color_4}></div>
                    <div className={style.cardlist__color_5}></div>
                    <div className={style.cardlist__color_6}></div> */}
                    </li>
                    <li className={style.cardlist__item}>
                        <img className={style.cardlist__img} src={photo3}  alt="#" />
                        <h3 className={style.cardlist__title}>TOP WOMEN</h3>
                        <p className={style.cardlist__subtitle}>Angels malu zip jeans slim black used</p>
                        <p className={style.cardlist__price}>139,00 EUR</p>
                        {/* <div className={style.cardlist__color_7}></div>
                    <div className={style.cardlist__color_8}></div>
                    <div className={style.cardlist__color_9}></div> */}
                    </li>
                    <li className={style.cardlist__item}>
                        <img className={style.cardlist__img} src={photo4}  alt="#" />
                        <h3 className={style.cardlist__title}>TOP WOMEN</h3>
                        <p className={style.cardlist__subtitle}>Angels malu zip jeans slim black used</p>
                        <p className={style.cardlist__price}>139,00 EUR</p>
                        {/* <div className={style.cardlist__color_10}></div>
                    <div className={style.cardlist__color_11}></div>
                    <div className={style.cardlist__color_12}></div> */}
                    </li>
                    <li className={style.cardlist__item}>
                        <img className={style.cardlist__img} src={photo5} alt="#" />
                        <h3 className={style.cardlist__title}>TOP WOMEN</h3>
                        <p className={style.cardlist__subtitle}>Angels malu zip jeans slim black used</p>
                        <p className={style.cardlist__price}>139,00 EUR</p>
                        {/* <div className={style.cardlist__color_13}></div>
                    <div className={style.cardlist__color_14}></div>
                    <div className={style.cardlist__color_15}></div> */}
                    </li>
                    <li className={style.cardlist__item}>
                        <img className={style.cardlist__img} src={photo6}  alt="#" />
                        <h3 className={style.cardlist__title}>TOP WOMEN</h3>
                        <p className={style.cardlist__subtitle}>Angels malu zip jeans slim black used</p>
                        <p className={style.cardlist__price}>139,00 EUR</p>
                        {/* <div className={style.cardlist__color_16}></div>
                    <div className={style.cardlist__color_17}></div>
                    <div className={style.cardlist__color_18}></div> */}
                    </li>
                    <li className={style.cardlist__item}>
                        <img className={style.cardlist__img} src={photo7}  alt="#" />
                        <h3 className={style.cardlist__title}>TOP WOMEN</h3>
                        <p className={style.cardlist__subtitle}>Angels malu zip jeans slim black used</p>
                        <p className={style.cardlist__price}>139,00 EUR</p>
                        {/* <div className={style.cardlist__color_19}></div>
                    <div className={style.cardlist__color_20}></div>
                    <div className={style.cardlist__color_21}></div> */}
                    </li>
                    <li className={style.cardlist__item}>
                        <img className={style.cardlist__img} src={photo8}  alt="#" />
                        <h3 className={style.cardlist__title}>TOP WOMEN</h3>
                        <p className={style.cardlist__subtitle}>Angels malu zip jeans slim black used</p>
                        <p className={style.cardlist__price}>139,00 EUR</p>
                        {/* <div className={style.cardlist__color_22}></div>
                    <div className={style.cardlist__color_23}></div>
                    <div className={style.cardlist__color_24}></div> */}
                    </li>
                    <li className={style.cardlist__item}>
                        <img className={style.cardlist__img} src={photo9}  alt="#" />
                        <h3 className={style.cardlist__title}>TOP WOMEN</h3>
                        <p className={style.cardlist__subtitle}>Angels malu zip jeans slim black used</p>
                        <p className={style.cardlist__price}>139,00 EUR</p>
                        {/* <div className={style.cardlist__color_25}></div>
                    <div className={style.cardlist__color_26}></div>
                    <div className={style.cardlist__color_27}></div> */}
                    </li>
                    <li className={style.cardlist__item}>
                        <img className={style.cardlist__img} src={photo10}  alt="#" />
                        <h3 className={style.cardlist__title}>TOP WOMEN</h3>
                        <p className={style.cardlist__subtitle}>Angels malu zip jeans slim black used</p>
                        <p className={style.cardlist__price}>139,00 EUR</p>
                        {/* <div className={style.cardlist__color_28}></div>
                    <div className={style.cardlist__color_29}></div>
                    <div className={style.cardlist__color_30}></div> */}
                    </li>
                    <li className={style.cardlist__item}>
                        <img className={style.cardlist__img} src={photo11}  alt="#" />
                        <h3 className={style.cardlist__title}>TOP WOMEN</h3>
                        <p className={style.cardlist__subtitle}>Angels malu zip jeans slim black used</p>
                        <p className={style.cardlist__price}>139,00 EUR</p>
                        {/* <div className={style.cardlist__color_31}></div>
                    <div className={style.cardlist__color_32}></div>
                    <div className={style.cardlist__color_33}></div> */}
                    </li>
                    <li className={style.cardlist__item}>
                        <img className={style.cardlist__img} src={photo12}  alt="#" />
                        <h3 className={style.cardlist__title}>TOP WOMEN</h3>
                        <p className={style.cardlist__subtitle}>Angels malu zip jeans slim black used</p>
                        <p className={style.cardlist__price}>139,00 EUR</p>
                        {/* <div className={style.cardlist__color_34}></div>
                    <div className={style.cardlist__color_35}></div>
                    <div className={style.cardlist__color_36}></div> */}
                    </li>
                </ul>
            </Container>
        </section>
    )
    }
}
    