import style from "./SearchBox.module.css";
import { selectfilters } from "../../redux/contacts/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter } from "../../redux/filters/filtersSlice.js";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectfilters);

  const handleFilter = (event) => {
    dispatch(setStatusFilter(event.target.value));
  };

  return (
    <div>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        onInput={handleFilter}
        value={filters}
        className={style.searchField}
      />
    </div>
  );
};

export default SearchBox;
