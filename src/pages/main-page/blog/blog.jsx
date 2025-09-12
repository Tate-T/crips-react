import style from "./blog.module.scss";
import { Container } from "../../../components/Container/Container";
import { Component } from "react";


export class Blog extends Component {

    render() {
        return (
            <section className={style.blog}>
                <Container>
                    <h1 className={style.blog__title}>Blog</h1>
                    <ul className={style.blog__list}>
                        <li className={style.blog__item}>
                            <h2 className={style.blog__title_item}>Article</h2>
                            <h3 className={style.blog__subtitle_item}>Exactly What To Wear To Every Type Of Wedding This Summer</h3>
                            <p className={style.blog__info_item}>A large part of the business here is building up the "experience". Double-page spreads in magazines. Ads on TV. Product placement and sponsorship in golf tournaments, tennis matches and sailing competitions. All of this builds up your perception of the brand - and additionally, it costs money.</p>
                            <div className={style.blog__line_item}></div>
                            <p className={style.blog__date_item}>21 January 2018 by guido</p>
                        </li>
                        <li className={style.blog__item}>
                            <h2 className={style.blog__title_item}>TIPS</h2>
                            <h3 className={style.blog__subtitle_item}>Exactly What To Wear To Every Type Of Wedding This Summer</h3>
                            <p className={style.blog__info_item}>When selling 70% fewer shirts, however, there are fewer shirts on the market, making it more exclusive, and therefore worth the money, for those to whom it matters. </p>
                            <div className={style.blog__line_item}></div>
                            <p className={style.blog__date_item}>21 January 2018 by guido</p>
                        </li>
                        <li className={style.blog__item}>
                            <h2 className={style.blog__title_item}>TIPS</h2>
                            <h3 className={style.blog__subtitle_item}>Exactly What To Wear To Every Type Of Wedding This Summer</h3>
                            <p className={style.blog__info_item}>A large part of the business here is building up the "experience". Double-page spreads in magazines. Ads on TV. Product placement and sponsorship in golf tournaments, tennis matches and sailing competitions. All of this builds up your perception of the brand - and additionally, it costs money.</p>
                            <div className={style.blog__line_item}></div>
                            <p className={style.blog__date_item}>21 January 2018 by guido</p>
                        </li>
                        <li className={style.blog__item}>
                            <h2 className={style.blog__title_item}>Article</h2>
                            <h3 className={style.blog__subtitle_item}>Exactly What To Wear To Every Type Of Wedding This Summer</h3>
                            <p className={style.blog__info_item}>When selling 70% fewer shirts, however, there are fewer shirts on the market, making it more exclusive, and therefore worth the money, for those to whom it matters. </p>
                            <div className={style.blog__line_item}></div>
                            <p className={style.blog__date_item}>21 January 2018 by guido</p>
                        </li>
                    </ul>
                </Container>
            </section >
        )
    }

}