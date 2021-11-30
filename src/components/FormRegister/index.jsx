import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link, Navigate, useNavigate } from "react-router-dom";

import api from "../../services/api";

import { Form, Input, ErrorDiv } from "./styles";

const FormRegister = () => {
  const formSchema = yup.object().shape({
    email: yup.string().email().required("Campo obrigatório!"),
    name: yup
      .string()
      .required("Campo obrigatório!")
      .matches(/^[a-zA-ZÀ-ú]+$/, "Preencher apenas com letras!"),
    username: yup
      .string()
      .required("Campo obrigatório!")
      .matches(/^[a-zA-Z]+$/, "Preencher apenas com letras sem acentos!"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(6, "Mínimo de 6 caracteres!")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>?]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Sua senha deve ter ao menos 1 letra maiúscula, 1 minúscula, 1 número e 1 caractere especial."
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const history1 = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    api
      .post("/register", data)
      .then((response) => {
        const { accessToken } = response.data;

        localStorage.setItem("@Provi:token", JSON.stringify(accessToken));
        // localStorage.setItem("@Kenziehub:id", response.data.user.id);

        // setAuthenticated(true);

        // toast.success("Login feito com sucesso!");
        console.log("Login feito com sucesso!");

        history1("/");
      })
      .catch(
        (_) =>
          console.log(
            "Erro ao logar. Senha e/ou email incorretos ou erro de conexão."
          )
        // toast.error(
        //
        // )
      );
  };

  // if (authenticated) {
  //   return <Navigate to="/dashboard" />;
  // }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Número de celular ou email" {...register("email")} />
      <Input placeholder="Primeiro nome" {...register("name")} />
      <Input placeholder="Nome de usuário" {...register("username")} />
      <Input type="password" placeholder="Senha" {...register("password")} />
      <button type="submit">Cadastre-se</button>
      {errors.email && <ErrorDiv>{errors.email.message}</ErrorDiv>}
      {errors.name && <ErrorDiv>{errors.name.message}</ErrorDiv>}
      {errors.username && <ErrorDiv>{errors.username.message}</ErrorDiv>}
      {errors.password && <ErrorDiv>{errors.password.message}</ErrorDiv>}
    </Form>
  );
};
export default FormRegister;
