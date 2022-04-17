import type { NextPage } from "next";
import { ChangeEvent, useContext, useState } from "react";
import FormButton from "../components/Button";
import FormError from "../components/FormError";
import Input from "../components/Input";
import { FormContext, FormContextProvider } from "../context/FormContext";

import styles from "../styles/app.module.css";

const Home: NextPage = () => {
  const { setIsValid } = useContext(FormContext);

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setIsValid(!!e.target.value);
  }

  return (
    <form className={styles.form}>
      <label>Email:</label>
      <Input onChange={handleEmailChange} />

      <FormError />

      <FormButton>Enviar</FormButton>
    </form>
  );
};

export default Home;
