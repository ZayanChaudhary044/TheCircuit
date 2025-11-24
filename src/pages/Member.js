import { Link } from "react-router-dom";
import Email from "../components/EmailForm.jsx";

function Member() {
  return (
    <div>
      <button className="flex ml-3 font-montserrat font-bold hover:underline ">
        <Link to="/HomePage">Back To Home</Link>
      </button>

      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center h-56 w-60 text-center mt-28">
          <h1 className="font-semibold font-montserrat text-2xl">
            Become A Member
          </h1>
          <p className="mt-6 font-montserrat">Subscribe for the latest news!</p>
          <Email />
        </div>
      </div>
    </div>
  );
}

export default Member;
