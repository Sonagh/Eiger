import { useState, useTransition } from "react";
import { Link } from "react-router-dom";
import Loader from "@components/Loader.jsx";

const Search = () => {
  const searchList = [
    "In-game bonuses and free spins",
    "Crypto deposit still not credited?",
    "EigerX VIP program overview",
    "Achievements and awards",
    "Some other thing for scroll",
    "Some other thing for scroll2",
  ];

  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(searchList);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    startTransition(() => {
      setFilteredItems(
        searchList.filter((item) =>
          item.toLowerCase().includes(newQuery.toLowerCase())
        )
      );
    })
  }

  return (
    <div className="ontainer mx-auto sm:w-full md:w-3/4 lg:w-1/2 bg-black rounded mt-3 py-2">
      <div className="relative w-full px-2">
        <i className="absolute right-5 top-1/2 -translate-y-1/2 text-primary icon-search" />
        <input type="text"
               placeholder="Search for help"
               value={query}
               className="focus:ring-1 focus:ring-primary"
               onChange={handleSearch}
        />
      </div>

      {isPending && (
        <div className="w-[30px] my-4 mx-auto">
          <Loader />
        </div>
      )}

      <ul className="search-list text-sm mt-2 px-2">
        {filteredItems.map((item, index) => (
          <li key={index} className={index !== filteredItems.length - 1 ? "mb-1" : ""}>
            <Link to="/help" className="flex items-center justify-between text-gray-100 hover:text-primary transition-colors duration-200 py-2 pl-3 pr-2">
                {item} <i className="icon-chevron-right text-primary" />
              </Link>
            </li>
        ))}
      </ul>

    </div>
  );
}

export default Search;