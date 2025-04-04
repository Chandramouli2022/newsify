import { createContext, useState } from "react";

const FeedContext = createContext();

function FeedProvider({ children }) {
  const [feed, setFeed] = useState(false);
  function toggle() {
    setFeed((prevFeed) => !prevFeed);
  }
  return (
    <FeedContext.Provider value={{ feed, toggle }}>
      {children}
    </FeedContext.Provider>
  );
}

export { FeedContext, FeedProvider };
