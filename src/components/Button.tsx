import { HTMLAttributes, ReactNode, useContext } from "react";
import { FormContext } from "../context/FormContext";

interface IFormButton extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function FormButton({ children, ...props }: IFormButton) {
  const { isValid } = useContext(FormContext)

  return (
    <button type="button" disabled={!isValid} {...props}>
      {children}
    </button>
  )
}

export default FormButton;