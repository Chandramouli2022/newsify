import CardGroup from "./CardGroup";
import CardList from "./CardList";

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

export default Cards;
