import { useSelector } from "react-redux";
import { selectFavoritePokemons } from "../RTK/selector";
import { Card } from "../components/Card";

export default function FavoritesPage() {
  const pokemon = useSelector(selectFavoritePokemons);
  return (
    <>
      {" "}
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
