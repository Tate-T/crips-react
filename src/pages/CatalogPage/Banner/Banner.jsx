import "./Banner.scss";
import { useMemo } from "react";

const PHRASES = {
  title: [
    "shopping without limits",
    "unlimited shopping",
    "purchasing whatever you want",
    "an endless shopping spree",
    "spending freely",
  ],
  short: [
    "Pick what works for you, regardless of your background.",
    "Choose the best option for you, and it does not matter whether you are.",
    "The choice is yours, no exceptions.",
    "Find your perfect fit, no matter the circumstances.",
    "This is for everyone, so take your pick.",
  ],
  long: [
    "Pick your favorite, whether you're in the city or the countryside. Your order will reach your door without fail.",
    "You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!",
    "The perfect choice is yours, and your location won't slow down our delivery. We're here to serve everyone.",
    "Our options are open to you, regardless of your address. We make sure your new item arrives on your doorstep.",
    "This offer is for everyone, whether you're in the east or the west. Your package will arrive at your home, wherever on the map.",
  ],
};

export const Banner = () => {
  const chosen = useMemo(() => {
    const today = new Date().toLocaleDateString("uk-UA");
    const saved = localStorage.getItem("catalogBannerChoose");

    if (saved) {
      const [date, data] = JSON.parse(saved);
      if (date === today) return data;
    }

    const newData = {
      title: Math.floor(Math.random() * PHRASES.title.length),
      long: Math.floor(Math.random() * PHRASES.long.length),
      short: Math.floor(Math.random() * PHRASES.short.length),
    };

    localStorage.setItem(
      "catalogBannerChoose",
      JSON.stringify([today, newData]),
    );
    return newData;
  }, []);

  return (
    <div className="banner">
      <div className="banner__container">
        <div className="banner__content">
          <h1 className="banner__title">{PHRASES.title[chosen.title]}</h1>
          <p className="banner__subtitle-d">{PHRASES.long[chosen.long]}</p>
          <p className="banner__subtitile">{PHRASES.short[chosen.short]}</p>
          <button className="banner__btn">Shop Now</button>
        </div>
      </div>
    </div>
  );
};
