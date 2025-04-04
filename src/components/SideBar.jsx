import user from "../assets/user.png";
import group from "../assets/group.svg";
import list from "../assets/list.svg";
import "../styles/SideBar.css";
import { useContext } from "react";
import { FeedContext } from "../context/FeedTheme";

const SideBar = ({ view, setView }) => {
  const { feed, toggle } = useContext(FeedContext);

  return (
    <aside className={`sidebar  ${feed ? "fb" : "nfb"}`}>
      <div className='user'>
        <img src={user} alt='user' className='user-image' />
        <span>
          <h2 className='user-hi'>Hi Reader,</h2>
          <p className='user-guide'>Here's your News!</p>
        </span>
      </div>
      <div className={`view-toggle ${feed ? "fb" : "nfb"}`}>
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
        <button
          className={`feedback-button ${feed ? "fb" : "nfb"}`}
          onClick={toggle}
        >
          We’re Listening!
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
