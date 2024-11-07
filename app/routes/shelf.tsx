// app/routes/shelf.tsx
import React, { useState, useEffect } from "react";
import globalStyles from "../styles/global.css"; // Import Global CSS
import shelfStyles from "../styles/shelf.css"; // Import Shelf CSS

export const links = () => [
  { rel: "stylesheet", href: globalStyles },
  { rel: "stylesheet", href: shelfStyles },
];

const Shelf: React.FC = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition + 5) % window.innerWidth);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section">
      <div className="shelf">
        <div className="character" style={{ left: position }}>
          <img src="/images/goat.gif" alt="Character" />
        </div>
      </div>
      Welcome to the Shelf page!
    </div>
  );
};

export default Shelf;
