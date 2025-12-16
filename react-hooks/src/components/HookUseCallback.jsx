import { useCallback, useState } from "react";

import List from "./List";

const HookUseCallback = () => {
  const [counter, setCounter] = useState(0);

  const getItemsFromDataBase = () => {
    return [1, 2, 3];
  };

  return (
    <div>
      <h2>UseCallback</h2>
      <List getItems={getItemsFromDataBase}></List>
      <button onClick={() => setCounter(counter + 1)}>Alterar</button>
      <p>{counter}</p>
      <hr />
    </div>
  );
};

export default HookUseCallback;
