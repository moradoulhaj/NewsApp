import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function NewsBoard() {
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState("us");
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${
      import.meta.env.VITE_APP_API
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setNews(data.articles));
  }, [country]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge text-bg-primary">News</span>
      </h2>
      {news.map((news, key) => (
          <NewsItem key={key}  title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      ))}
    </div>
  );
}

export default NewsBoard;
