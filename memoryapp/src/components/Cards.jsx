import { useState, useEffect } from "react";

let names = [
  "pikachu", "eevee", "gengar", "lucario",
  "gardevoir", "mewtwo", "snorlax", "jigglypuff",
  "dragonite", "gyarados", "ditto", "umbreon",
];

export default function Cards(props) {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const images = await Promise.all(
          names.map(async (name) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await res.json();
            return data.sprites.other.home.front_shiny;
          })
        );
        setPokemon(images);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

    names =names.sh
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