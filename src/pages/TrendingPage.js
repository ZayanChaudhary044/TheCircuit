import { useEffect, useState } from "react";
import axios from "axios";

function TrendingPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const isProd = window.location.hostname.includes("vercel.app");

    // Use serverless API in production, direct GNews in development
    const url = isProd
      ? "/api/news"
      : "https://gnews.io/api/v4/top-headlines?category=general&lang=en&apikey=e732bf85fe3cfa8c18adb2df66d0be7c";

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setArticles(res.data.articles || []);
      })
      .catch((err) => {
        console.log("API error:", err);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {articles.length > 0 && (
        <div className="m-2 col-span-1 sm:col-span-2 md:col-span-3 row-span-3 bg-slate-100 text-white p-4">
          <h3 className="rounded-xl mb-1 text-4xl text-pretty font-montserrat font-extrabold text-black">
            {articles[0].title}
          </h3>
          <p className="text-black pt-2 text-sm">
            {articles[0].description}
          </p>
        </div>
      )}

      {articles.slice(1).map((article, index) => (
        <div
          key={index}
          className={`${
            index % 4 === 0 ? "col-span-4 row-span-2 mr-2" : "col-span-1"
          } row-span-1 bg-slate-100 ml-2 p-4 sm:col-span-1 md:col-span-1 lg:col-span-1`}
        >
          <img
            src={article.image}
            className="w-60 h-36 rounded-3xl"
            alt="article"
          />
          <h3 className="font-montserrat font-extrabold text-xl mt-3 text-left text-black">
            {article.title}
          </h3>
          <p className="text-left text-sm mt-3">
            {article.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TrendingPage;
