const PokemonCard = ({ name, url, number }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 bg-gray-500 hover:bg-red-500">
      <img
        className=""
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`}
        width={150}
        height={150}
        alt=""
      />
      <div className="px-6 py-4">
        <div className=" font-bold text-2xl mb-2 flex justify-center">
          {name}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
