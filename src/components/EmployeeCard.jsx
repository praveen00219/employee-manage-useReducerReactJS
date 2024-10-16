import React from "react";

function EmployeeCard({ index, employee, buttonText, buttonAction, disabled }) {
  return (
    <div
      className={`flex justify-between shadow-lg items-center mb-2 p-2 rounded-lg ${
        disabled ? "bg-gray-300 text-gray-400" : "bg-white text-black"
      }`}
    >
      <p className="flex gap-4 items-center justify-between w-9/12">
        <span>{`(${index + 1})  ${employee.name}`}</span>
        <span>-</span>
        <span className="font-semibold">Age: {employee.age}</span>
      </p>
      {buttonAction && (
        <button
          className={`px-4 py-1 rounded ${
            disabled
              ? "cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={buttonAction}
          disabled={disabled}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default EmployeeCard;
