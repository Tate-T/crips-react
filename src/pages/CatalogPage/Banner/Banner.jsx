import { useState } from "react";

import styles from "./Banner.module.scss";

export const Banner = () => {
	const phrases = {
		title: ["shopping without limits", "unlimited shopping", "purchasing whatever you want", "an endless shopping spree", "spending freely"],
		short: [
			"Pick what works for you, regardless of your background.",
			"Choose the best option for you, and it does not matter whether you are.",
			"The choice is yours, no exceptions.",
			"Find your perfect fit, no matter the circumstances.",
			"This is for everyone, so take your pick."
		],
		long: [
			"Pick your favorite, whether you're in the city or the countryside. Your order will reach your door without fail.",
			"You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!",
			"The perfect choice is yours, and your location won't slow down our delivery. We're here to serve everyone.",
			"Our options are open to you, regardless of your address. We make sure your new item arrives on your doorstep.",
			"This offer is for everyone, whether you're in the east or the west. Your package will arrive at your home, wherever on the map."
		]
	};

	const curDate = () => {
		const currentDate = new Date();
		const day = currentDate.getDate();
		const month = currentDate.getMonth() + 1;
		const year = currentDate.getFullYear();
		return `${day}.${month}.${year}`;
	};

	const [choose, setChoose] = useState(() => {
		const savedChoose = JSON.parse(localStorage.getItem("catalogBannerChoose"));
		const today = curDate();

		if (!savedChoose || savedChoose[0] !== today) {
			const newChoose = [
				today,
				{
					title: Math.floor(Math.random() * phrases.title.length),
					long: Math.floor(Math.random() * phrases.long.length),
					short: Math.floor(Math.random() * phrases.short.length)
				}
			];
			localStorage.setItem("catalogBannerChoose", JSON.stringify(newChoose));
			return newChoose;
		}

		return savedChoose;
	});

	return (
		<div className={styles["banner"]}>
			<div className={styles["banner__container"]}>
				<div className={styles["banner__content"]}>
					<h1 className={styles["banner__title"]}>{phrases.title[choose[1].title]}</h1>
					<p className={styles["banner__subtitle-d"]}>{phrases.long[choose[1].long]}</p>
					<p className={styles["banner__subtitile"]}>{phrases.short[choose[1].short]}</p>
					<button className={styles["banner__btn"]}>Shop Now</button>
				</div>
			</div>
		</div>
	);
};
