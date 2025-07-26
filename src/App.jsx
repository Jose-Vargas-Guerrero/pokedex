import { Routes, Route, Link } from "react-router";
import PokeList from "./components/PokeList";
import Home from "./components/Home";

function App() {
  return (
    <>
      <nav className="bg-orange-400 flex justify-around items-center mx-auto py-1.5">
        <h1 className="bg-orange-400 text-white text-2xl font-bold">Pokedex</h1>
        <Link className="bg-amber-50 border-2 border-amber-50 px-2 py-1.5 rounded-xl" to={"/"}>Home</Link>
        <Link className="bg-amber-50 border-2 border-amber-50 px-2 py-1.5 rounded-xl" to={"/pokemon"}>Ver Pokemons</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pokemon" element={<PokeList />} />
      </Routes>
    </>
  );
}

export default App;
