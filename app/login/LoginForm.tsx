"use client";
import React, { useState } from "react";
import Heading from "../components/Heading";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button";
import { AiOutlineGoogle } from "react-icons/ai";
import Input from "../components/inputs/Input";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);
      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success("Logged In");
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };
  return (
    <>
      <Heading title="Sign in" center={true} />
      <Button
        onClick={() => {}}
        label="Continue with Google"
        icon={AiOutlineGoogle}
        outline
      />
      <hr className="bg-slate-300 h-px w-full" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        type="text"
        register={register}
        errors={errors}
        required
      />{" "}
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        type="password"
        register={register}
        errors={errors}
        required
      />{" "}
      <Button
        label={isLoading ? "Loading" : "Log in"}
        onClick={handleSubmit(onSubmit)}
      />
      <p>
        Already have an account?{" "}
        <Link className="underline" href={"/register"}>
          Sign up
        </Link>
      </p>
    </>
  );
}
