import "./Sorting.scss";
export const Sorting = () => {
  return (
    <form action="" className="sorting__form">
      <select name="sortBy" id="" className="sorting__select-sortBy">
        <option value="">price (High to low)</option>
        <option value="">price (Low to high)</option>
        <option value="">popularity(High to low)</option>
        <option value="">popularity(Low to high)</option>
      </select>
      <select name="sortNum" id="" className="sorting__select-sortNum">
        <option value="">48</option>
        <option value="">49</option>
        <option value="">50</option>
        <option value="">51</option>
      </select>
    </form>
  );
};
