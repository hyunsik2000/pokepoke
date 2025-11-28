import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-wrap w-full gap-5 justify-center mt-5">
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
