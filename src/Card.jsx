import React from "react";
import { useState } from "react";

const Card = function () {
  const [position, setPosition] = useState({ top: "55%", left: "60%" });
  const [isEscaping, setIsEscaping] = useState(false);
  const [clicked, setClicked] = useState(false);

  function moveButton() {
    const randomTop = Math.floor(Math.random() * 60) + 20 + "%";
    const randomLeft = Math.floor(Math.random() * 60) + 20 + "%";

    setPosition({ top: randomTop, left: randomLeft });
  }
  return (
    <div className="container">
      {clicked &&
        Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            className="love-text"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${i * 0.15}s`,
            }}
          >
            I ❤️ You
          </span>
        ))}
      <div className="card">
        {clicked ? (
          <>
            <h2>🥹💖 I knew it!</h2>
            <p style={{ color: "#d6336c", fontSize: "18px" }}>
              My heart just did a happy dance 💃🕺
              <br />
              Valentine confirmed forever 💘
            </p>
          </>
        ) : (
          <>
            <h2>Will you be my Valentine? 💘</h2>

            <p style={{ color: "#e64980", fontSize: "15px" }}>
              (Warning: Saying No may break a heart 💔)
            </p>

            <div className="buttons">
              <button className="btnYes" onClick={() => setClicked(true)}>
                Yes ❤️
              </button>

              <button
                className={`btnNo ${isEscaping ? "escape" : ""}`}
                style={isEscaping ? position : {}}
                onMouseEnter={() => {
                  setIsEscaping(true);
                  moveButton();
                }}
                onTouchStart={() => {
                  setIsEscaping(true);
                  moveButton();
                }}
              >
                No 💔
              </button>
            </div>
          </>
        )}
      </div>
      <footer className="copyright">
        © {new Date().getFullYear()} Abithsingh. All rights reserved.
      </footer>
    </div>
  );
};
export default Card;
