import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div className={css.searchContainer}>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={handleChange}
        className={css.searchBox}
      ></input>
    </div>
  );
};

export default SearchBox;
