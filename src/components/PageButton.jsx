import React from "react";

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
export default PageButton;
