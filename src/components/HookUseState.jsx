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

  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(age);
  };

  return (
    <div>
      <h2>Hook useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar Nomes</button>
      <p>Digite a sua idade: </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input type="submit" value="Enviar" />
      </form>
      <p>Sua idade é: {age}</p>

      <hr />
    </div>
  );
};

export default HookUseState;
