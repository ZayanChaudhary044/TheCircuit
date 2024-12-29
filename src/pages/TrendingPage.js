import { useEffect, useState } from "react";
import axios from "axios";

function TrendingPage() {
  const [articles, setPost] = useState([]);

  useEffect(() => {
    const url =
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a845b904b184456e98202af0177717b3";
    axios.get(url).then((response) => {
      setPost(response.data.articles);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {articles.length > 0 && (
        <div className="m-2 col-span-1 md:col-span-3 row-span-3 bg-slate-100 text-white p-4">
          <h3 className="rounded-xl mb-1 text-4xl text-pretty font-montserrat font-extrabold text-black">
            {articles[0].title}
          </h3>
          <p className=" text-black pt-2 text-sm">{articles[0].description}</p>
        </div>
      )}

      {articles.slice(1).map((article, index) => (
        <div
          key={index}
          className={`${
            index % 4 === 0 ? "col-span-4 row-span-2 mr-2" : "col-span-1"
          } row-span-1 bg-slate-100 ml-2 p-4`}
        >
          <img src={article.urlToImage} className="w-60 h-36 rounded-3xl" alt="article" />
          <h3 className="font-montserrat font-extrabold text-xl mt-3 text-left text-black">
            {article.title}
          </h3>
          <p className="text-left text-sm mt-3">{article.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TrendingPage;
