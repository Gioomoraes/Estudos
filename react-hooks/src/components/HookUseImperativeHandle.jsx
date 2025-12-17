import { useRef } from "react";

import SomeComponent from "./SomeComponent";

const HookUseImperativeHandle = () => {
  const inputRef = useRef();
  return (
    <div>
      <h2>UseImperativeHandle</h2>
      <SomeComponent ref={inputRef} />
      <hr />
    </div>
  );
};

export default HookUseImperativeHandle;
