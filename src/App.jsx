import "./App.css";
import "tailwindcss/tailwind.css";
import React, { useReducer } from "react";
import EmployeeList from "./components/EmployeeList";
import TeamList from "./components/TeamList";
import { reducer, initialState } from "./useReducerHook/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="min-h-screen p-5 bg-gray-200 flex flex-col items-center justify-center">
      <h1 className="mb-10 text-3xl text-[#38a06b] font-mono font-bold">
        UseReducer Hook
      </h1>
      <div className="employeeContainer flex gap-6 w-full max-w-6xl">
        <EmployeeList employees={state.employees} dispatch={dispatch} />
        <TeamList team={state.team} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
