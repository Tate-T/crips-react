
import './BrandList.css';

const BrandList = () => {
  return (
    <section className="brand-selector">
      <div className="section-title">
        <hr />
        <span>CHOOSE YOUR BRAND</span>
        <hr />
      </div>
      <ul className="brand-list">
        <li>CHANEL</li>
        <li className="active">BURBERRY</li>
        <li>Dior</li>
        <li>FENDI</li>
        <li>VERSACE</li>
        <li>GUCCI</li>
        <li>ARMANI</li>
      </ul>
    </section>
  );
};

export default BrandList;
