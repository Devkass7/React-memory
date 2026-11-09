import { useState } from "react";

import Header from "./Header";

import Cards from "./Cards";

export default function App() {
  const [score, setScore] = useState(0);
  const[highScore, setHighScore] = useState(null)

  const [clicked, setClicked] = useState([])

  function clickHandler(e) {
    

    let imgSrc = e.currentTarget.src;

    if(clicked.includes(imgSrc)){
      setHighScore(score)
      setScore(0)
      setClicked([])
      
    }else {
      setClicked(prev => [...prev, imgSrc])
      setScore((prevScore) => prevScore + 1);
    }


  }

  return (
    <>
      <Header currentScore = {score} highScore ={highScore}/>
      <Cards  clickHandler = {clickHandler} count = {score} />
    </>
  );
}
