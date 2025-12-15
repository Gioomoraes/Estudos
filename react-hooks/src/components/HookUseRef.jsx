import { useEffect, useState, useRef } from "react";

const HookUseRef = () => {
  const numberRef = useRef(0);
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h2>UseRef</h2>
      <hr />
    </div>
  );
};

export default HookUseRef;
