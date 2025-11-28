import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/detail/:pokemonId"} element={<DetailPage />} />
          <Route path={"/search"} element={<SearchPage />} />
          <Route path={"/favorties"} element={<FavoritesPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
