const PokemonCard = ({ name, url, number }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 bg-gray-500 hover:bg-red-500">
      <img
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`}
        alt=""
      />
      <div className="px-6 py-4">
        <div className=" font-bold text-3xl mb-2 flex justify-center">
          {name}
        </div>
        <p>{url}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
