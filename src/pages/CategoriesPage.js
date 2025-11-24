import { useEffect, useState } from "react";
import axios from "axios";
import general from "../icons/general.png";
import business from "../icons/business.png";
import sci from "../icons/atom.png";
import spo from "../icons/sports.png";
import tech from "../icons/cpu.png";
import cine from "../icons/cinema.png";
import hrt from "../icons/heartbeat.png";
import wrld from "../icons/worldwide.png";

function CategoriesPage() {
  const [articles, setArticle] = useState([]);
  const [currentCategory, changeCategory] = useState("general");

  useEffect(() => {
    const isProd = window.location.hostname.includes("vercel.app");

    // Build URL depending on environment
    const url = isProd
      ? `/api/news?category=${currentCategory}`
      : `https://gnews.io/api/v4/top-headlines?category=${currentCategory}&lang=en&apikey=e732bf85fe3cfa8c18adb2df66d0be7c`;

    axios
      .get(url)
      .then((response) => {
        setArticle(response.data.articles || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentCategory]);

  const clickCategory = (category) => {
    changeCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Button Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-10 py-5">
        <button className="border-black border-2 rounded-md p-2 flex items-center justify-center"
          onClick={() => clickCategory("general")}
        >
          General <img src={general} alt="general" className="w-8 h-8 ml-2" />
        </button>

        <button className="border-black border-2 rounded-md p-2 flex items-center justify-center"
          onClick={() => clickCategory("business")}
        >
          Business <img src={business} alt="business" className="w-8 h-8 ml-2" />
        </button>

        <button className="border-black border-2 rounded-md p-2 flex items-center justify-center"
          onClick={() => clickCategory("science")}
        >
          Science <img src={sci} alt="science" className="w-8 h-8 ml-2" />
        </button>

        <button className="border-black border-2 rounded-md p-2 flex items-center justify-center"
          onClick={() => clickCategory("sports")}
        >
          Sports <img src={spo} alt="sports" className="w-8 h-8 ml-2" />
        </button>

        <button className="border-black border-2 rounded-md p-2 flex items-center justify-center"
          onClick={() => clickCategory("technology")}
        >
          Technology <img src={tech} alt="technology" className="w-8 h-8 ml-2" />
        </button>

        <button className="border-black border-2 rounded-md p-2 flex items-center justify-center"
          onClick={() => clickCategory("entertainment")}
        >
          Entertainment <img src={cine} alt="entertainment" className="w-8 h-8 ml-2" />
        </button>

        <button className="border-black border-2 rounded-md p-2 flex items-center justify-center"
          onClick={() => clickCategory("health")}
        >
          Health <img src={hrt} alt="health" className="w-8 h-8 ml-2" />
        </button>

        <button className="border-black border-2 rounded-md p-2 flex items-center justify-center"
          onClick={() => clickCategory("world")}
        >
          World <img src={wrld} alt="world" className="w-8 h-8 ml-2" />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div key={index} className="mb-5 p-5 bg-white rounded-lg shadow-md flex flex-col items-start">
              {article.image && (
                <img
                  src={article.image}
                  alt="Article"
                  className="w-full max-h-60 object-cover rounded-lg mb-4"
                />
              )}
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-600">{article.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No articles available.</p>
        )}
      </div>
    </div>
  );
}

export default CategoriesPage;
