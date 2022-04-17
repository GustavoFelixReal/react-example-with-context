import { HTMLAttributes } from "react";

interface IInput extends HTMLAttributes<HTMLInputElement> {}

function Input({ ...props }: IInput) {
  return (
    <input {...props} />
  )
}

export default Input;
