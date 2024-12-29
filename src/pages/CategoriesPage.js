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
    const fetchArticles = async () => {
      const url = `https://gnews.io/api/v4/top-headlines?category=${currentCategory}&lang=en&apikey=e732bf85fe3cfa8c18adb2df66d0be7c`;
      try {
        const response = await axios.get(url);
        setArticle(response.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchArticles();
  }, [currentCategory]);

  const clickCategory = (category) => {
    changeCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Button Section */}
      <div className="grid grid-cols-4 gap-4 px-10 py-5">
        <button
          className="border-black border-2 rounded-md p-2 flex items-center justify-center"
          onClick={() => clickCategory("general")}
        >
          General
          <img src={general} alt=" " className="w-8 h-8 ml-2" />
        </button>
        <button
          className="border-black border-2 rounded-md p-2 flex items-center justify-center"
          onClick={() => clickCategory("business")}
        >
          Business
          <img src={business} alt=" " className="w-8 h-8 ml-2" />
        </button>
        <button
          className="border-black border-2 rounded-md p-2 flex items-center justify-center"
          onClick={() => clickCategory("science")}
        >
          Science
          <img src={sci} alt=" " className="w-8 h-8 ml-2" />
        </button>
        <button
          className="border-black border-2 rounded-md p-2 flex items-center justify-center"
          onClick={() => clickCategory("sports")}
        >
          Sports
          <img src={spo} alt=" " className="w-8 h-8 ml-2" />
        </button>
        <button
          className="border-black border-2 rounded-md p-2 flex items-center justify-center"
          onClick={() => clickCategory("technology")}
        >
          Technology
          <img src={tech} alt=" " className="w-8 h-8 ml-2" />
        </button>
        <button
          className="border-black border-2 rounded-md p-2 flex items-center justify-center"
          onClick={() => clickCategory("entertainment")}
        >
          Entertainment
          <img src={cine} alt=" " className="w-8 h-8 ml-2" />
        </button>
        <button
          className="border-black border-2 rounded-md p-2 flex items-center justify-center"
          onClick={() => clickCategory("health")}
        >
          Health
          <img src={hrt} alt=" " className="w-8 h-8 ml-2" />
        </button>
        <button
          className="border-black border-2 rounded-md p-2 flex items-center justify-center"
          onClick={() => clickCategory("world")}
        >
          World
          <img src={wrld} alt=" " className="w-8 h-8 ml-2" />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-10">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div
              key={index}
              className="mb-5 p-5 bg-white rounded-lg shadow-md flex flex-col items-start"
            >
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

      {/* Footer */}
      <footer className="bg-dark-blue rounded-xl text-white text-xs p-5 ml-1 mr-1">
        <a
          href="https://www.flaticon.com/free-icons/impact"
          title="impact icons"
          className="block"
        >
          Impact icons created by Smartline - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/science"
          title="science icons"
          className="block"
        >
          Science icons created by Good Ware - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/basketball"
          title="basketball icons"
          className="block"
        >
          Basketball icons created by Pause08 - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/chip"
          title="chip icons"
          className="block"
        >
          Chip icons created by Freepik - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/cinema"
          title="cinema icons"
          className="block"
        >
          Cinema icons created by Freepik - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/heartbeat"
          title="heartbeat icons"
          className="block"
        >
          Heartbeat icons created by Freepik - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/world"
          title="world icons"
          className="block"
        >
          World icons created by turkkub - Flaticon
        </a>
      </footer>
    </div>
  );
}

export default CategoriesPage;
