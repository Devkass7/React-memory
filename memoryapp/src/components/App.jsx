import { useState } from "react";

import Header from "./Header";

import Cards from "./Cards";

export default function App() {
  const [score, setScore] = useState(0);
  const[highScore, setHighScore] = useState(null)

  const [clicked, setClicked] = useState(null)

  function clickHandler(e) {
    setScore((prevScore) => prevScore + 1);

    let imgSrc = e.currentTarget.src;

    if(clicked.includes(imgSrc)){
      setHighScore(score)
    }else {
      setClicked()
    }
  }

  return (
    <>
      <Header currentScore = {score} highScore ={highScore}/>
      <Cards  clickHandler = {clickHandler} count = {score} />
    </>
  );
}
