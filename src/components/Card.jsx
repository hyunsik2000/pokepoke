import { useNavigate } from "react-router-dom";

export const Card = ({ pokemon }) => {
  const navigate = useNavigate();
  return (
    <section
      className="flex flex-col w-[150px] border border-gray-400 justify-center items-center gap-2.5 pb-2.5 rounded-[10px]"
      onClick={() => navigate(`/detail/${pokemon.id}`)}
    >
      <img
        className="w-[120px]"
        src={pokemon.front}
        alt={`${pokemon.name} 이미지`}
      />
      <div>{pokemon.name}</div>
    </section>
  );
};
