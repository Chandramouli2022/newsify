import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import im from "../assets/image.jpg";
import data from "../data.js";

const API_KEY = import.meta.env.VITE_NEWS_API; // Use VITE_ prefix

const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;

export const useFetchNews = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(API_URL);
        var articles = data;
        if (!response.status=="error" &&response.data.articles && response.data.articles[0].urlToImage)
          articles = response.data.articles;
        // console.log(articles);
        const newsData = articles.map((article) => ({
          id: uuidv4(),
          title: article.title || "No Title",
          description: article.description || "No Description",
          time: article.publishedAt || new Date().toISOString(),
          image: article.urlToImage || article.image || im,
          readMore: article.url || "https://biztoc.com/x/11e125609293b7f3",
        }));
        setArticles(newsData.slice(0, 24));
      } catch (error) {
        console.error("Error fetching news articles:", error);
      }
    };
    fetchArticles();
  }, []);

  return { articles, setArticles };
};
