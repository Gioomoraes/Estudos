import { useState } from "react";

const HookUseState = () => {
  let userName = "Giovanna";

  const [name, setName] = useState("linda");

  const changeNames = () => {
    userName = "Giovanna Moraes";

    setName("Maravilhosa");

    console.log(userName);
  };
  console.log(name);

  return (
    <div>
      <h2>Hook useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar Nomes</button>
    </div>
  );
};

export default HookUseState;
