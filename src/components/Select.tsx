import React, { FC } from "react";

interface Props {
  options: string[][];
  label: string;
}

const Select: FC<Props> = ({ label, options }) => {
  return (
    <>
      <label htmlFor={`select-${label}`}>{label}</label>
      <select name={`select-${label}`} id={`select-${label}`}>
        {options.map((option, index) => (
          <option key={option[0] + index} value={option[0]}>
            {option[1]}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
