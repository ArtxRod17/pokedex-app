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
  let pokeType: string[] = [];
  pokeInfo.types.map((typeName) => {
    let typeValue = typeName.type.name;
    pokeType.push(typeValue);
    console.log(pokeType);
  });
  return (
    <div className=" bg-red-500 border-8 p-4">
      <div className=" flex flex-row px-2">
        <h2 className="font-bold text-5xl mr-4">{pokeInfo.id}</h2>
        <h2 className=" font-bold text-4xl">{name}</h2>
      </div>
      <img
        src={pokeInfo.sprites.front_default}
        width={400}
        height={400}
        alt={`Picture of ${name}`}
      ></img>
      {/* SWITCH STATEMENT FOR COLOR OF TYPE */}
      <div></div>
      <h1 className=" text-xl">{pokeType}</h1>
    </div>
  );
};

export default PokemonInfo;
