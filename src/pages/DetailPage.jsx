import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";
import FavoriteButton from "../components/FavoriteButton";
import FlipCard from "../components/FlipCard";

export default function DetailPage() {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
  return (
    <div className="flex flex-col justify-center items-center border-b-8 border-r-8 py-[30px] px-[60px] rounded-[10px] bg-white mb-5">
      <div className="text-[28px] mb-2.5">
        {pokemon.name}
        <FavoriteButton pokemonId={Number(pokemon.id)} />
      </div>
      <div className="whitespace-pre-wrap text-center">
        {pokemon.description}
      </div>
      <FlipCard front={pokemon.front} back={pokemon.back} />
    </div>
  );
}
