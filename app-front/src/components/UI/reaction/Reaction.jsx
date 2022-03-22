import React, { useState } from "react";
// Styles
import "./Reaction.scss";

const emojis = [
  {
    type: "like",
    icon: "./icons/like.png",
  },
  {
    type: "love",
    icon: "./icons/love.png",
  },
  {
    type: "haha",
    icon: "./icons/haha.png",
  },
  {
    type: "wow",
    icon: "./icons/wow.png",
  },
  {
    type: "care",
    icon: "./icons/care.png",
  },
  {
    type: "sad",
    icon: "./icons/sad.png",
  },
  {
    type: "angry",
    icon: "./icons/angry.png",
  },
];

const Reaction = ({ reactions }) => {
  const [defaultEmoji, setDefaultEmoji] = useState(reactions);
  const [emoji, setEmoji] = useState(false);

  const handleReaction = (e) => {
    if (!emoji) {
      setEmoji(true);
    } else {
      const [arr] = emojis.filter((emoji) => emoji.type === e.target.alt);
      setDefaultEmoji(arr);
      setEmoji(false);
    }
  };

  return (
    <div className="interact">
      <div className="like-button">
        <button onClick={handleReaction} value={defaultEmoji.type}>
          <img
            src={defaultEmoji.icon}
            alt="like"
            width="20px"
            value={defaultEmoji.type}
          />
          <span>{defaultEmoji.type}</span>
        </button>
        <ul className={`interact-options ${emoji && "show-reaction"}`}>
          {emojis.map((emoji) => (
            <li key={emoji.type}>
              <button onClick={handleReaction}>
                <img src={emoji.icon} alt={emoji.type} width="20px" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reaction;
