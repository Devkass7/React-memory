import Header from "./Header";
import { useState, useEffect } from "react";
import Cards from "./Cards";

export default function App() {
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

  return (
    <>
      <Header />
      <Cards />
    </>
  );
}
