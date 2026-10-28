import Header from "./Header"

export default function App(){


    async function fetchImages() {
        const url = "https://pokeapi.co/api/v2/pokemon/ditto"
        try {
            const req = await fetch(url)
            const response = await req.json()
            console.log(response);
            
        } catch (error) {
            console.error("Error fetching data")
        }
        
    }    
    return(
       <Header />
    )
}