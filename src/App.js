import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header";
import "../src/assets/css/reset.css";
import SeccionContenido from "./components/SeccionContenido/SeccionContenido";
import Footer from "./components/footer/Footer";
function App() {
  const [isHover, setHover] = useState(false);

  const handleSearch = () => {
    setHover(true);
  };
  const handleaNoSearch = () => {
    setHover(false);
  };
  return (
    <>
      <Header
        handleSearch={handleSearch}
        handleaNoSearch={handleaNoSearch}
        isHover={isHover}
      ></Header>
      <div onClick={handleaNoSearch}>
        <SeccionContenido />
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
