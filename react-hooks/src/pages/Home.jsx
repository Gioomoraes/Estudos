import React from "react";
import HookUseState from "../components/HookUseState";
import HookUseReducer from "../components/HookUseReducer";
import HookUseEffect from "../components/HookUseEffect";
import HookUseContext from "../components/HookUseContext";

const Home = () => {
  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <HookUseContext />
    </div>
  );
};

export default Home;
