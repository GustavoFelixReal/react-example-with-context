import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import Error from "./Error";

function FormError() {
  const { isValid } = useContext(FormContext)

  return !isValid ? <Error message='O formulário tem um erro!!' /> : null;
}

export default FormError;
