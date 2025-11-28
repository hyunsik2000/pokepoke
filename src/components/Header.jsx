import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1 className="text-[40px] text-center">포켓몬 도감</h1>
      <nav className="flex gap-2.5 justify-center">
        <Link to={"/"}>메인</Link>
        <Link to={"/detail/1"}>상세정보</Link>
        <Link to={"/search"}>검색</Link>
        <Link to={"/favorite"}>찜목록</Link>
      </nav>
    </header>
  );
}
