import { useState, useEffect } from "react";


export default function Cards(){


  const [img, setImg] = useState(null)

      const names = [
  "pikachu", "eevee", "gengar", "lucario",
  "gardevoir", "mewtwo", "snorlax", "jigglypuff",
  "dragonite", "gyarados", "ditto", "umbreon"
];

names.map(el => {
       async function fetchImages(el) {

    const url = `https://pokeapi.co/api/v2/pokemon/${el}`;
    try {
      const req = await fetch(url);
      const response = await req.json();
      setImg(response.sprites.other.home.front_shiny)

    } catch (error) {
      console.error("Error fetching data");
    }
  }
  
})
    

  useEffect(() => {
    fetchImages();
  }, []);

    return(
      <main>
        { img ? <div >
          <img src={img} alt="" />
         </div> : ""}
        </main>
    
    )
}