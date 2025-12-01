import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";

const MainPage = lazy(() => import("./pages/MainPage"));
const DetailPage = lazy(() => import("./pages/DetailPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-wrap w-full gap-5 justify-center bg-[gray] py-7">
        <Suspense fallback={<div>로딩중...</div>}>
          <Routes>
            <Route path={"/"} element={<MainPage />} />
            <Route path={"/detail/:pokemonId"} element={<DetailPage />} />
            <Route path={"/search"} element={<SearchPage />} />
            <Route path={"/favorite"} element={<FavoritesPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
