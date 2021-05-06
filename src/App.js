import React from "react";
import "./App.css";
import { useState } from "react";

const bookDB = {
  javascript: [
    { name: "Eloquent JavaScript", author: "Marijn Haverbeke", rating: "4/5" },
    { name: "You Don't Know JS", author: "Kyle Simpson", rating: "3.5/5" },
    { name: "", author: "Greg Sidelnikov", rating: "3.5/5" },
  ],

  selfhelp: [
    {
      name: "Think And Grow Rich",
      author: "Napoleon Hill",
      rating: "5/5",
    },
    {
      name: "The Rudest Book Ever",
      author: "Shwetabh Gangwar",
      rating: "4.5/5",
    },
  ],
  business: [
    {
      name: "Rework",
      author: "David Heinemeier Hansson and Jason Fried",
      rating: "4/5",
    },
    {
      name: "Developing The Leader Within You 2.0",
      author: "John C. Maxwell",
      rating: "3.5/5",
    },
  ],
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 goodbooks </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "medium" }}> Author - {book.author} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}