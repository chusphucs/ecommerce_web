import React from "react";
import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import Input from "../components/inputs/Input";
import LoginForm from "./LoginForm";

export default function page() {
  return (
    <Container>
      <FormWrap>
        <LoginForm />
      </FormWrap>
    </Container>
  );
}
