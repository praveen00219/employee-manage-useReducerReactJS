import React from "react";
import EmployeeCard from "./EmployeeCard";

function TeamList({ team, dispatch }) {
  const averageAge =
    team.length > 0
      ? (team.reduce((acc, emp) => acc + emp.age, 0) / team.length).toFixed(2)
      : 0;

  return (
    <div className="w-2/3 sm:w-full  h-[75vh] overflow-y-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Team Members</h2>
      <div className="flex items-center justify-between gap-4 mb-8 sticky">
        <p className="text-md font-semibold">Average Age: {averageAge}</p>
        <button
          className=" bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          onClick={() => dispatch({ type: "SORT_BY_AGE" })}
        >
          Sort by Age
        </button>
      </div>
      {team.map((member, idx) => (
        <EmployeeCard
          key={member.id}
          index={idx}
          employee={member}
          buttonText="Remove"
          buttonAction={() =>
            dispatch({ type: "REMOVE_FROM_TEAM", payload: member.id })
          }
        />
      ))}
    </div>
  );
}

export default TeamList;
