import React from "react";
import "../App.css";
import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees, dispatch }) {
  return (
    <div className="w-2/3 sm:w-full h-[75vh] overflow-y-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Employees</h2>
      {employees.map((employee, idx) => (
        <EmployeeCard
          key={employee.id}
          index={idx}
          employee={employee}
          buttonText="Add"
          buttonAction={() =>
            dispatch({ type: "ADD_TO_TEAM", payload: employee.id })
          }
          disabled={employee.isInTeam}
        />
      ))}
    </div>
  );
}

export default EmployeeList;
