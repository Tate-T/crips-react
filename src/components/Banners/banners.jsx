export const banners = () => {
  return (
    <section className="banners container">
        <div className="banners-double-centre">
      <div
        className="banners-item banner-1"
        style={{
          backgroundImage: "url('')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
        }}
      >
        <h2 className="banners-title-ChooseYL">choosе your look</h2>
        <p className="banners-description">See our clothing collections</p>
        <button className="banners-button">see offers</button>
      </div>

      <div
        className="banners-item banner-2"
        style={{
          backgroundImage: "url('')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <h2 className="banners-title-BrandNS">brand new style</h2>
        <p className="banners-description">Popular clothing brands</p>
        <button className="banners-button">see offers</button>
      </div>
      </div>
      <div
        className="banners-item banners-3"
        style={{
          backgroundImage: "url('')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <h2 className="banners-title-UpToOff">Up to 40% off</h2>
        <p className="banners-description">Special offers and great deals</p>
        <button className="banners-button">shop now</button>
      </div>
    </section>
  );
};
