export const FiltrName = ({ className, filtrName }) => {
  return (
    <div className={`catalog-filtration__filtr-name-${className}`}>
      <h2 className={`catalog-filtration__name-${className}`}>{filtrName}</h2>
      <p className="catalog-filtration__filtr-name-close">-</p>
      {/* <svg className="catalog-filtration__filtr-name-close">
        <use href="#icon-close"></use>
      </svg> */}
    </div>
  );
};
