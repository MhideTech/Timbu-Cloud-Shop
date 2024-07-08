import { Link } from "react-router-dom";
import FilterItem from "./FilterItem";

function FilterIconsContainer() {
    return (
      <div>
        <div className="flex justify-between items-center">
          <div className="mb-3">
            <Link to="/">
              <i className="fa-solid fa-arrow-left-long text-lg"></i>
            </Link>
          </div>
          <FilterItem />
        </div>
      </div>
    );
}

export default FilterIconsContainer
