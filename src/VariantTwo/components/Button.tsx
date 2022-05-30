import React from 'react';

type ButtonPropsType = {
  name: string
  isDisabled: boolean
  onClick: () => void
}
export const Button: React.FC<ButtonPropsType> = ({ name, isDisabled, onClick }) => {

  return (
    <>
      <button
        onClick={onClick}
        disabled={isDisabled}
      >
        {name}
      </button>
    </>
  );
};