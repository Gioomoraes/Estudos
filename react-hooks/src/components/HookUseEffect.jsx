import { useEffect, useState } from "react";

const HookUseEffect = () => {
  useEffect(() => {
    console.log("Componente montado");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h2>Use Effect</h2>
      <p>Número: {number}</p>
      <button onClick={changeSomething}>Executar</button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
