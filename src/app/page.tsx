import PokemonCard from "@/components/PokemonCard";
import Link from "next/link";

async function getPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

  if (!res.ok) {
    throw new Error("Failed to Fetch Pokemon");
  }
  const data = await res.json();
  const pokemons = data.results;
  return pokemons;
}

export default async function Home() {
  const pokemons = await getPokemon();
  console.log(pokemons);

  return (
    <div className="">
      <h1 className=" text-3xl p-4">Welcome To The Pokedex</h1>
      <div className=" flex flex-wrap">
        {pokemons.map((pokemon, index) => (
          <Link href={`/${pokemon.name}`}>
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
              number={(index + 1).toString().padStart(3, "0")}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
