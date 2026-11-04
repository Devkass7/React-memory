import { useState, useEffect } from "react";


export default function Cards(){


  // const [img, setImg] = useState(null)

  const [pokemon, setPokemon] = useState([])

      const names = [
  "pikachu", "eevee", "gengar", "lucario",
  "gardevoir", "mewtwo", "snorlax", "jigglypuff",
  "dragonite", "gyarados", "ditto", "umbreon"
];
  async function fetchImages(el) {

    const url = `https://pokeapi.co/api/v2/pokemon/${el}`;
    try {
      const req = await fetch(url);
      const response = await req.json();
      setPokemon(prev => {
        return([...prev, response.sprites.other.home.front_shiny])
       
      })

    } catch (error) {
      console.error("Error fetching data");
    }
  }
  

    

  useEffect(() => {

   names.map(el => {
  fetchImages(el)
})
  }, []);

    return(
      <main>
        {pokemon.map(name => {
          return( (pokemon.length > 0) ? <div >
          <img key={name} src={name} alt="" />
         </div> : "")
        
        })}
       
        </main>
    
    )
}