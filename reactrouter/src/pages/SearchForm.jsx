import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/search?name=" + query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Procurar..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <input type="submit" value="Buscar" /> ;
    </form>
  );
};

export default SearchForm;
