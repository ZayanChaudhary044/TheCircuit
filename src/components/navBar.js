import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <h1 className="rounded-xl m-1 bg-dark-blue text-left mb-1 text-7xl text-pretty italic font-montserrat font-extrabold text-white">
        The Circuit
      </h1>
      <ul className="rounded-xl m-1 bg-dark-blue font-bold items-center list-none flex space-x-12 text-white text-xl pl-4">
        <li className="hover:scale-95 duration-150">
          <Link to="/HomePage">Home</Link>
        </li>
        <li className="hover:scale-95 duration-150">
          <Link to="/TrendingPage">Trending</Link>
        </li>
        <li className="hover:scale-95 duration-150">
          <Link to="/CategoriesPage">Categories</Link>
        </li>
        <li className="hover:scale-95 duration-150">
          <Link to="/Weather">Weather</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
