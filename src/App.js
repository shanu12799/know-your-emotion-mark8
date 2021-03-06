import React, { useState } from 'react'
import './App.css';
import emoticonBackground from './Images/emoji-framed.jpg'


const emojiDictionary = {
  "๐": "grinning face",
  "๐": "grinning face with big eyes",
  "๐": "Smiling",
  "๐ณ": "disbelief",
  "๐": "sad",
  "๐ฅก": "takeout box",
  "โค๏ธ": "love",
  "๐": "annoyance",
  "๐": "beaming face with smiling eyes",

  "๐": "grinning squinting face",

  "๐": "grinning face with sweat",

  "๐คฃ": "rolling on the floor laughing",
  "๐": "face with tears of joy",
  "๐": "slightly smiling face",
  "๐": "upside-down face",
  "๐": "winking face",
  "๐": "smiling face with halo",
  "๐ฅฐ": "smiling face with hearts",
  "๐": "smiling face with heart-eyes",
  "๐คฉ": "star in eyes",
  "๐": "face blowing a kiss",
  "๐": "kissing face with closed eyes",
  "๐": "kissing face with smiling eyes",
  "๐": "face savoring food",
  "๐": "face with tongue out",
  "๐": "winking face with tongue",
  "๐": "squinting face with tongue",
  "๐ค": "money-mouth face",
  "๐ค": "hugging face",
  "๐คญ": "face with hand over mouth",
  "๐ค": "thinking face",
  "๐ค": "zipper-mouth face",
  "๐คจ": "face with raised eyebrow",
  "๐ถ": "face without mouth",
  "๐": "smirking face",
  "๐": "face with rolling eyes",
  "๐": "relieved face",

  "๐ช": "sleepy face",
  "๐คค": "drooling face",/** add some more to show how the app now expands when there's new data */
};

/**
 * Bonus feature
 * converting an object to array of keys
 */
const emojis = Object.keys(emojiDictionary);
function App() {
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }
  function emojiClickHandler(inputEmoji) {
    setEmoji(inputEmoji)
    setMeaning(emojiDictionary[inputEmoji]);
  }
  return (
    <div className="App" style={{ background: `url(${emoticonBackground}) no-repeat center/cover`, height: '100vh' }}>
      {/* <img src={emoticonBackground} /> */}
      <h1 style={{ paddingTop: '10%' }}>Know Your Emotions</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "60%",
          marginTop: '30px'
        }}
      />
      <h2 style={{ paddingTop: '10px' }}> {emoji} </h2>
      <h3 style={{ paddingTop: '10px' }}> {meaning} </h3>
      <div style={{ width: '70%', textAlign: 'center', margin: '0 auto', paddingTop: '10px' }}>
        {
          emojis.map((emoji, index) => (
            <span key={index}
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            >
              {" "}
              {emoji}{" "}
            </span>
          ))
        }
      </div>
    </div>
  );
}

export default App;
