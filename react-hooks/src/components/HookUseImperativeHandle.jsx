import { useRef } from "react";

import SomeComponent from "./SomeComponent";

const HookUseImperativeHandle = () => {
  const inputRef = useRef();
  return (
    <div>
      <h2>UseImperativeHandle</h2>
      <SomeComponent ref={inputRef} />
      <button onClick={() => inputRef.current.validate()}>validate</button>
      <hr />
    </div>
  );
};

export default HookUseImperativeHandle;
