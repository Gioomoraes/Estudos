import { useLayoutEffect, useState, useEffect } from "react";

const HookUseLayoutEffect = () => {
  const [name, setName] = useState("NOME1");

  useEffect(() => {
    console.log("2");
    setName("NOME2");
  }, []);

  useLayoutEffect(() => {
    console.log("1");
    setName("NOME3");
  }, []);

  console.log(name);

  return (
    <div>
      <h2>UseLayoutEffect</h2>
      <p>Nome:{name}</p>
      <hr />
    </div>
  );
};

export default HookUseLayoutEffect;
