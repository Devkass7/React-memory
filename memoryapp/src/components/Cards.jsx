import { useState, useEffect } from "react";

const names = [
  "pikachu", "eevee", "gengar", "lucario",
  "gardevoir", "mewtwo", "snorlax", "jigglypuff",
  "dragonite", "gyarados", "ditto", "umbreon",
];

export default function Cards(props) {

  const [pokemon, setPokemon] = useState([]);

  function shuffle(array) {

  for (let i = array.length - 1; i > 0; i--) {
   
    const j = Math.floor(Math.random() * (i + 1));
    
   
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


let randNames = shuffle([...names])

  useEffect(() => {
    async function fetchImages() {
      try {
        const images = await Promise.all(
          names.map(async (randNames) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randNames}`);
            const data = await res.json();
            return data.sprites.other.home.front_shiny;
          })
        );
        setPokemon(images);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

   
    fetchImages();
  }, []);



  return (
    <main>
      {pokemon.map((src) => (
        <div key={src}>
          <img src={src} alt="" onClick={props.clickHandler} />
        </div>
      ))}
    </main>
  );
}