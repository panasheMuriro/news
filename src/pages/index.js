import React, { useState } from 'react'
import { useEffect } from 'react';
import NewsCard from '../components/NewsCard';

export default function Home() {

  const [articles, setArticles] = useState([]);

  // let apiKey = "8b142c9a2780852810ad192488a93eb1";
  let newsApiKey = "801d599e8dca434f92a09776beade943"
  // https://newsapi.org/v2/top-headlines?country=us&apiKey=801d599e8dca434f92a09776beade943


  useEffect(() => {
    fetch(` https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`)
      .then(res => res.json())
      .then(result => {
        if (result.status == "ok") {
          console.log(result.articles)
          setArticles(result.articles);

        }
        console.log(result);
      });
  }, [])


  return (
    <div style={{ backgroundColor: "#efefef", width: "100vw", height: "100vh", overflow: "scroll" }}>
      <div style={{ height: 100, width: "100vw", backgroundColor: "#fff", display: "flex", justifyContent: "center", alignItems: "center", position: "sticky", top: 0 }}>
        <h2 style={{ margin: 0 }}>Newzzz</h2>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {articles.length > 0 && articles.map(x =>
          <NewsCard picture={x.urlToImage} heading={x.title} description={x.content} link={x.url} />
        )}
      </div>
    </div>
  )
}
