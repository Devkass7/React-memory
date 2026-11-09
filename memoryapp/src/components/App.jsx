import { useState } from "react";

import Header from "./Header";

import Cards from "./Cards";

export default function App() {
  const [score, setScore] = useState(0);
  const[highScore, setHighScore] = useState(null)

  function clickHandler(e) {
    setScore((prevScore) => prevScore + 1);

    console.log(e.currentTarget);
  }

  return (
    <>
      <Header currentScore = {score} highScore ={highScore}/>
      <Cards  clickHandler = {clickHandler} count = {score} />
    </>
  );
}
