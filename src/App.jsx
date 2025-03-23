import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import im from "./assets/image.jpg";
import close from "./assets/close.png";
import user from "./assets/user.png";
import group from "./assets/group.svg";
import list from "./assets/list.svg";
import timeImg from "./assets/time.png";
import data from "./data.js"

function CardGroup({ id, title, description, time, image, onClose }) {
  const maxLength = 50;
  const maxLengthDescription = 60;
  const trimmedTitle =
    title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
  const trimmedDescription =
    description.length > maxLengthDescription
      ? description.substring(0, maxLengthDescription) + "..."
      : description;

  return (
    <div className='card'>
      <div className='card-close' onClick={() => onClose(id)}>
        <img src={close} alt='close' className='close-image' />
      </div>
      <h2 className='card-title'>{trimmedTitle}</h2>
      <p className='card-description'>{trimmedDescription}</p>
      <p className='card-time'>
        <img
          src={timeImg}
          alt='cal'
          width={"8px"}
          style={{ paddingRight: "4px" }}
        />
        {new Date(time).toLocaleString()}
      </p>
      {image && <img src={image} alt='news' className='card-image' />}
    </div>
  );
}

function CardList({ id, title, description, time, image, onClose }) {
  const maxLength = 70;
  const maxLengthDescription = 80;
  const trimmedTitle =
    title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
  const trimmedDescription =
    description.length > maxLengthDescription
      ? description.substring(0, maxLengthDescription) + "..."
      : description;

  return (
    <div className='card2'>
      {image && <img src={image} alt='news' className='card-image' />}
      <div className='card-details'>
        <h2 className='card-title'>{trimmedTitle}</h2>
        <p className='card-description'>{trimmedDescription}</p>
        <p className='card-time'>{new Date(time).toLocaleString()}</p>
      </div>
      <div className='card-close' onClick={() => onClose(id)}>
        <img src={close} alt='close' className='close-image' />
      </div>
    </div>
  );
}

function PageButton({ n, isActive, onClick }) {
  return (
    <button
      className={`page-number ${isActive ? "active" : ""}`}
      onClick={() => onClick(n)}
    >
      {n}
    </button>
  );
}

function Cards({ currentArticles, view, onClose }) {
  return view === "group" ? (
    <div className='cards-group'>
      {currentArticles.map((article) => (
        <CardGroup key={article.id} {...article} onClose={onClose} />
      ))}
    </div>
  ) : (
    <div className='cards-list'>
      {currentArticles.slice(0, 5).map((article) => (
        <CardList key={article.id} {...article} onClose={onClose} />
      ))}
    </div>
  );
}
var newsData = data;
function App() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState("group");
  const articlesPerPage = 6;

  const API_URL =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=25be7d8287a84972a775f5252e6eabc1";

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // const response = await axios.get(API_URL);
        // newsData = response.data.articles.map((article) => ({
        //   id: uuidv4(),
        //   title: article.title || "No Title",
        //   description: article.description || "No Description",
        //   time: article.publishedAt || new Date().toISOString(),
        //   image: article.urlToImage || im,
        //   readMore: article.url || "https://biztoc.com/x/11e125609293b7f3",
        // }));
        //console.log(newsData);
        setArticles(newsData.slice(0, 24)); // Store only 24 articles
      } catch (error) {
        console.error("Error fetching news articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handleClose = (id) => {
    setArticles((prevArticles) => {
      const filteredArticles = prevArticles.filter(
        (article) => article.id !== id
      );
      if (filteredArticles.length > 5) return [...filteredArticles];
      else {
        setArticles(newsData.slice(0, 24));
        return articles
      }
    });
  };

  return (
    <div className='main-page'>
      <aside className='sidebar'>
        <div className='user'>
          <img src={user} alt='user' className='user-image' />
          <span>
            <h2 className='user-hi'>Hi Reader,</h2>
            <p className='user-guide'>Here's your News!</p>
          </span>
        </div>
        <div className='view-toggle'>
          <h2 className='toggle-title'>View Toggle</h2>
          <div className='toggle-container'>
            <button
              className={
                view === "group" ? "toggle-group active" : "toggle-group"
              }
              onClick={() => setView("group")}
            >
              <img src={group} alt='group' className='toggle-image1' />
            </button>
            <button
              className={view === "list" ? "toggle-list active" : "toggle-list"}
              onClick={() => setView("list")}
            >
              <img src={list} alt='list' className='toggle-image2' />
            </button>
          </div>
        </div>
        <div className='feedback'>
          <h2 className='feedback-title'>Have a Feedback?</h2>
          <button className='feedback-button'>We’re Listening!</button>
        </div>
      </aside>
      <main className='content'>
        <Cards
          currentArticles={currentArticles}
          view={view}
          onClose={handleClose}
        />
        <nav className='page-nums'>
          {Array.from({ length: Math.min(3, totalPages) }, (_, i) => (
            <PageButton
              key={i + 1}
              n={i + 1}
              isActive={i + 1 === currentPage}
              onClick={setCurrentPage}
            />
          ))}
          {totalPages > 3 && (
            <button
              className='page-number'
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              {" "}
              &gt;&gt;{" "}
            </button>
          )}
        </nav>
      </main>
    </div>
  );
}

export default App;
