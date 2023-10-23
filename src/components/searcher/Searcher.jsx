import React from "react";
import "../searcher/Searcher.css";

const Searcher = (props) => {
  const { isHover } = props;

  return (
    <form className = {`searcher_form${isHover ? " searcher_form_visible" : ""}`}action="/buscar" method="GET">
      <input
        className="searcher_box"
        type="text"
        name="q"
        placeholder="Buscar Película"
      />
      <button className="searcher_buton"type="submit">Buscar</button>
    </form>
  );
};

export default Searcher;


