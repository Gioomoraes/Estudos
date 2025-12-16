import { useMemo, useState, useEffect } from "react";

const HookUseMemo = () => {
  const [number, setNumber] = useState(0);

  const premiumNumbers = useMemo(() => {
    return ["0", "100", "200", "300"];
  }, []);

  useEffect(() => {
    console.log("premium numbers foi alterado");
  }, [premiumNumbers]);

  return (
    <div>
      <h2>UseMemo</h2>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {premiumNumbers.includes(number) ? <p>Acertou o número</p> : ""}
      <hr />
    </div>
  );
};

export default HookUseMemo;
