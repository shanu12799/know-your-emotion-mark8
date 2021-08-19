import React, { useState } from 'react'
import './App.css';
import emoticon from './Images/emoticon.jpg'
import emoticonBackground from './Images/emoji-framed.jpg'


const emojiDictionary = {
  "😀": "grinning face",
  "😃": "grinning face with big eyes",
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😂": "face with tears of joy",
  "😑": "annoyance",
  "😁": "beaming face with smiling eyes",

  "😆": "grinning squinting face",

  "😅": "grinning face with sweat",

  "🤣": "rolling on the floor laughing",
  "😂": "face with tears of joy",
  "🙂": "slightly smiling face",
  "🙃": "upside-down face",
  "😉": "winking face",
  "😊": "smiling face with smiling eyes",
  "😇": "smiling face with halo",
  "🥰": "smiling face with hearts",
  "😍": "smiling face with heart-eyes",
  "🤩": "star in eyes",
  "😘": "face blowing a kiss",
  "😚": "kissing face with closed eyes",
  "😙": "kissing face with smiling eyes",
  "😋": "face savoring food",
  "😛": "face with tongue out",
  "😜": "winking face with tongue",
  "😝": "squinting face with tongue",
  "🤑": "money-mouth face",
  "🤗": "hugging face",
  "🤭": "face with hand over mouth",
  "🤔": "thinking face",
  "🤐": "zipper-mouth face",
  "🤨": "face with raised eyebrow",
  "😑": "expressionless face",
  "😶": "face without mouth",
  "😏": "smirking face",
  "🙄": "face with rolling eyes",
  "😌": "relieved face",
  "😔": "pensive face",
  "😪": "sleepy face",
  "🤤": "drooling face",/** add some more to show how the app now expands when there's new data */
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
          emojis.map((emoji) => (
            <span
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
