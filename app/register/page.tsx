import React from "react";
import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import Heading from "../components/Heading";
import { Input } from "postcss";
import RegisterForm from "./RegisterForm";

export default function Register() {
  return (
    <Container>
      <FormWrap>
        <RegisterForm />
      </FormWrap>
    </Container>
  );
}
