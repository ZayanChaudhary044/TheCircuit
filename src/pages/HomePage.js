
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-homeback bg-cover bg-center rounded-lg h-screen w-full p-4">
      <h1 className="text-center pt-56 text-8xl text-pretty italic font-montserrat font-extrabold text-white">
        The Circuit
      </h1>
      <p id="slogan" className="pt-7 pb-7 text-white font-bold ml-6">
        Caught Up With A Click Of A Button
      </p>
      <button
        id="btn"
        className="m-1 p-1 border-4 rounded-lg border-dark-blue text-white ml-10 bg-gray-700 hover:scale-95 duration-150"
      ><Link to="/Member">Become A Member</Link>
      </button>
    </div>
  );
}

export default HomePage;
