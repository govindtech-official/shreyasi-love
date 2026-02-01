"use client";
import { useState } from "react";

export default function Home() {
  const slides = [
    "Hey Shreyasi 💖",
    "I made this just for you 🫶",
    "Every moment with you feels magical ✨",
    "You make my world brighter and my heart happier 🌸",
    "Shreyasi… I have something important to ask you 💭"
  ];

  const [index, setIndex] = useState(0);
  const [noCount, setNoCount] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ top: "60%", left: "55%" });

  const nextSlide = () => {
    if (index < slides.length) setIndex(index + 1);
  };

  const moveNo = () => {
    if (noCount < 5) {
      setNoCount(noCount + 1);
      setNoPos({
        top: Math.random() * 70 + "%",
        left: Math.random() * 70 + "%"
      });
    }
  };

  return (
    <main style={styles.main}>
      {accepted ? (
        <div style={styles.card}>
          <h1>💖 I Love You, Shreyasi 💖</h1>
          <p>
            From this moment and forever,<br />
            I promise to cherish you,<br />
            stand by you through everything,<br />
            and keep choosing you every single day 🌍✨<br /><br />
            You are my today, my tomorrow, and my always ❤️
          </p>
        </div>
      ) : index < slides.length ? (
        <div style={styles.card}>
          <h1>{slides[index]}</h1>
          <button style={styles.btn} onClick={nextSlide}>
            Next ➜
          </button>
        </div>
      ) : (
        <div style={styles.card}>
          <h1>Shreyasi, will you be my girlfriend forever? 💍❤️</h1>

          <div style={{ marginTop: "30px" }}>
            <button
              style={styles.yes}
              onClick={() => setAccepted(true)}
            >
              YES 💖
            </button>

            <button
              style={{
                ...styles.no,
                position: "absolute",
                top: noPos.top,
                left: noPos.left
              }}
              onMouseEnter={moveNo}
              onClick={() => {
                if (noCount >= 5) setAccepted(true);
                else moveNo();
              }}
            >
              {noCount >= 5 ? "YES 💖" : "NO 🙈"}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

const styles = {
  main: {
    height: "100vh",
    background: "linear-gradient(135deg,#ff9a9e,#fad0c4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "cursive",
    overflow: "hidden"
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
  },
  btn: {
    marginTop: "20px",
    padding: "10px 25px",
    borderRadius: "20px",
    border: "none",
    background: "#ff6f91",
    color: "white",
    fontSize: "16px",
    cursor: "pointer"
  },
  yes: {
    padding: "12px 30px",
    fontSize: "18px",
    borderRadius: "25px",
    border: "none",
    background: "#28c76f",
    color: "white",
    cursor: "pointer",
    marginRight: "20px"
  },
  no: {
    padding: "12px 30px",
    fontSize: "18px",
    borderRadius: "25px",
    border: "none",
    background: "#ff4d4d",
    color: "white",
    cursor: "pointer"
  }
};
