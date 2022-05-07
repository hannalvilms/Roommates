/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function SearchBar() {
  return (
    <div className="navbar-input">
      <input type="text" placeholder="Search something" className="input-border"></input>
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}
export default SearchBar;
