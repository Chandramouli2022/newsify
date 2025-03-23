import Cards from "./Cards";
import PageButton from "./PageButton";

const NewsContainer = ({ articles, onClose, currentPage, setCurrentPage, totalPages, view }) => {
  return (
    <main className="content">
      <Cards currentArticles={articles} view={view} onClose={onClose} />
      <nav className="page-nums">
        {Array.from({ length: Math.min(3, totalPages) }, (_, i) => (
          <PageButton key={i + 1} n={i + 1} isActive={i + 1 === currentPage} onClick={setCurrentPage} />
        ))}
        {totalPages > 3 && <button onClick={() => setCurrentPage(currentPage + 1)}> &gt;&gt; </button>}
      </nav>
    </main>
  );
};
export default NewsContainer;