import { useState } from "react";
import SideBar from "./components/SideBar.jsx";
import NewsContainer from "./components/NewsContainer.jsx";
import { useFetchNews } from "./hooks/useFetchNews.js"
import { usePagination } from "./hooks/usePagination.js";
import FeedbackForm from "./components/FeedbackForm.jsx";
import "./App.css";  // Ensure this is present


function App() {
  const { articles, setArticles } = useFetchNews();
  const [view, setView] = useState("group");
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const { currentPage, setCurrentPage, totalPages, indexOfFirstItem, indexOfLastItem } = usePagination(
    articles.length,
    6
  );
  const currentArticles = articles.slice(indexOfFirstItem, indexOfLastItem);

  const handleClose = (id) => {
    setArticles((prev) => prev.filter((article) => article.id !== id));
  };
  const handleFeedback = ()=>{
    setIsFeedbackOpen(!isFeedbackOpen)
  }

  return (
    <div className="main-page">
      <SideBar view={view} setView={setView} handleFeedback={handleFeedback}/>
      <NewsContainer
        articles={currentArticles}
        onClose={handleClose}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        view={view}
      />
      <FeedbackForm isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
    </div>
  );
}
export default App;