import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // A function will fetch data everytime the user clicks previous/next button or visits any other routers
  const updateNews = async () => {
    document.title = `News App - ${
      props.category[0].toUpperCase() + props.category.slice(1) === "General"
        ? "Home"
        : props.category[0].toUpperCase() + props.category.slice(1)
    }`;
    props.setProgress(10);
    const url =
      // fetching article data from API
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    const url =
      // fetching article data from API
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${
        props.category
      }&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  // On page load
  useEffect(() => {
    // Will effect when news is updated
    updateNews();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1 className="news-heading" style={{ margin: "80px 35px 0" }}>
        {props.category === "general"
          ? `News App - Top Headlines`
          : `News App - ${
              props.category[0].toUpperCase() + props.category.slice(1)
            }`}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length <= totalResults}
        loader={<Spinner />}
      >
        <div className="news-component">
          {articles.map((element, index) => {
            return (
              <NewsItem
                key={index}
                title={element.title ? element.title : ""}
                description={
                  element.description ? element.description.slice(0, 145) : ""
                }
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
                imageUrl={
                  element.urlToImage
                    ? element.urlToImage
                    : "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/07/0/0/manufacturing.jpg?ve=1&tl=1"
                }
                newsUrl={element.url}
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </>
  );
}
News.defaultProps = {
  pageSize: 6,
  country: "us",
  category: "general",
};
News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};
