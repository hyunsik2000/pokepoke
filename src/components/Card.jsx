import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import { memo, useState } from "react";

export const Card = memo(({ pokemon }) => {
  console.log("card", pokemon.id);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const navigate = useNavigate();
  return (
    <section
      className="flex flex-col w-[150px] border-b-5 border-r-5 justify-center items-center gap-2.5 pb-2.5 rounded-[10px] hover:scale-110 transition-transform hover:filter-[drop-shadow(0_0_5px_rgba(0,0,0,0.5))]"
      onClick={() => navigate(`/detail/${pokemon.id}`)}
    >
      {isImageLoading ? (
        <div className="w-[120px] h-[120px] leading-[120px]">로딩중...</div>
      ) : null}
      <img
        className="w-[120px]"
        onLoad={() => setIsImageLoading(false)}
        src={pokemon.front}
        style={{ display: isImageLoading ? "none" : "block" }}
        alt={`${pokemon.name} 이미지`}
      />
      <div>
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </section>
  );
});
