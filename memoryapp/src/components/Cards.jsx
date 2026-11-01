import { useState, useEffect } from "react";


export default function Cards(props){

     async function fetchImages() {
    const url = "https://pokeapi.co/api/v2/pokemon/ditto";
    try {
      const req = await fetch(url);
      const response = await req.json();
      console.log(response.sprites.other);
    } catch (error) {
      console.error("Error fetching data");
    }
  }

  useEffect(() => {
    fetchImages();
  }, []);

    return(
      <main>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
        </main>
    
    )
}