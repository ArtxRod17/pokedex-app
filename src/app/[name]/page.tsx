import Image from "next/image";

async function getData(pokemon) {
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch poke info");
  }
  return response.json();
}

const PokemonInfo = async ({ params: { name } }) => {
  const pokeInfo = await getData(name);
  let pokeType = [];
  pokeInfo.types.map((typeName) => {
    let typeValue = typeName.type.name;
    pokeType.push(typeValue);
  });
  return (
    <div>
      <h2>{name}</h2>
      <h2>{pokeInfo.id}</h2>
      <h2>{pokeType}</h2>
      <img
        src={pokeInfo.sprites.front_default}
        width={200}
        height={200}
        alt={`Picture of ${name}`}
      ></img>
    </div>
  );
};

export default PokemonInfo;
