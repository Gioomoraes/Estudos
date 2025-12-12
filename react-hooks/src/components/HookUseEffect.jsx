import { useEffect, useState } from "react";

const HookUseEffect = () => {
  useEffect(() => {
    console.log("Componente montado");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    console.log("Executa quando o anotherNumber muda");
  }, [anotherNumber]);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Executa depois de 2 segundos");
    }, 2000);

    return () => clearTimeOut(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h2>Use Effect</h2>
      <p>Número: {number}</p>
      <button onClick={changeSomething}>Executar</button>
      <p>AnotherNumber {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        {" "}
        Muda anotherNumber
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
