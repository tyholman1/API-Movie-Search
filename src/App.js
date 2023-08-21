import "./styles.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Search from "./components/Search";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Search/:searchvalue" element={<Search />} />
        <Route path="/Movies" element={<Movies />} />
      </Routes>
    </div>
  );
}
