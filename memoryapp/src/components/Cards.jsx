import { useState, useEffect } from "react";


export default function Cards(){

  const [img, setImg] = useState(null)

     async function fetchImages() {
    const url = "https://pokeapi.co/api/v2/pokemon/ditto";
    try {
      const req = await fetch(url);
      const response = await req.json();
      setImg(response.sprites.other.home.front_shiny)

    } catch (error) {
      console.error("Error fetching data");
    }
  }

  useEffect(() => {
    fetchImages();
  }, []);

    return(
      <main>
         <div >
          <img src={img} alt="" />
         </div>
        </main>
    
    )
}