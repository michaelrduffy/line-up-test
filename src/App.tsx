// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// import type { RootState } from "./store";
// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "./store/tempSlice";
import { useGetPerformanceByIdQuery } from "./services/performance";

function App() {
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();

  const { data, error, isLoading } = useGetPerformanceByIdQuery("21813");
  console.log(data?.data.totalCapacity);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="bg-green-300">Vite + React</h1>
      <div className="card">
        {error ? (
          <>error</>
        ) : isLoading ? (
          <>loading...</>
        ) : data ? (
          <code>{JSON.stringify(data)}</code>
        ) : null}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
