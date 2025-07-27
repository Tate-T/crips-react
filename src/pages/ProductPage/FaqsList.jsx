import s from "./FaqsList.module.scss";

export const FaqsList = () => {
  return (
    <>
      <div className={s.mainWrapper}>
        <div className={s.aboutWrapper}>
          <div className={s.aboutBox}>
            <h3 className={s.aboutTitle}>ABOUT PRODUCT</h3>
            <p className={s.aboutText}>
              Cool off this summer in the Mini Ruffle Smocked Tank Top from our
              very own LA Hearts. This tank features a smocked body, adjustable
              straps, scoop neckline, ruffled hems, and a cropped fit.
            </p>
          </div>

          <div className={s.advantBox}>
            <h3 className={s.advantTitle}>ADVANTAGES</h3>
            <p className={s.advantText}>
              Smocked body Adjustable straps Scoop necklin Ruffled hems Cropped
              length Model is wearing a small 100% rayon Machine washable
            </p>
          </div>
          <div className={s.advantBoxSeco}>
            <h3 className={s.advantTitle}>ADVANTAGES</h3>
            <p className={s.advantText}>
              Smocked body Adjustable straps Scoop neckline
            </p>
          </div>
        </div>

        <div className={s.shippingBox}>
          <h3 className={s.shippingTitle}>SHIPPING</h3>
          <p className={s.shippingText}>
            We offer Free Standard Shipping for all orders over $75 to the 50
            states and the District of Columbia. The minimum order value must be
            $75 before taxes, shipping and handling. Shipping fees are
            non-refundable. Please allow up to 2 business days (excluding
            weekends, holidays, and sale days) to process your order. Processing
            Time + Shipping Time = Delivery Time
          </p>
        </div>
      </div>

      <select name="Other information">
        <p>kdkkd</p>
      </select>
      <select name="Another tab"></select>
    </>
  );
};
