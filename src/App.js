import React, { useState } from "react";
import "./styles.css";

var emojidictionary = {
  "😊": "Smiling",
  "😞": "Sad",
  "😕": "Confused",
  "😪": "Sleepy",
  "😠": "Angry",
  "👋": "Goodbye",
  "🤩": "Star-Struck",
  "😘": "Blowing a Kiss",
  "🤑": "Money-Mouth",
  "🤐": "Zipper-Mouth",
  "🙃": "Upside-Down",
  "😉": "Winking",
  "🥴": "Woozy",
  "🥶": "Cold"
};
var defineEmoji = Object.keys(emojidictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function changeHandler(event) {
    var input = event.target.value;
    var meaning = emojidictionary[input];
    if (meaning === undefined) {
      meaning = "💀 We don't have the emoji you entered 💀";
    }

    setMeaning(meaning);
  }
  function clickHandler(emoji) {
    var meaning = emojidictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> Emoji Interpretter</h1>
      <input onChange={changeHandler} placeholder="input any emoji"></input>
      <h2>{meaning}</h2>
      {defineEmoji.map(function (emoji) {
        return (
          <span
            key={emoji}
            onClick={() => clickHandler(emoji)}
            style={{ fontSize: "1.8rem", padding: "0.8rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
