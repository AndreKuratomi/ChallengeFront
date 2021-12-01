import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../Providers/Auth/auth";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Form, Input, ErrorDiv } from "./styles";

const FormRegister = () => {
  const { setAuth } = useAuth();

  const formSchema = yup.object().shape({
    email: yup.string().email().required("Email obrigatório!"),
    name: yup
      .string()
      .required("Nome obrigatório!")
      .matches(/^[a-zA-ZÀ-ú]+$/, "Preencher nome apenas com letras!"),
    username: yup
      .string()
      .required("Username obrigatório!")
      .matches(/^[a-zA-ZÀ-ú]+$/, "Preencher username apenas com letras!"),
    password: yup
      .string()
      .required("Senha obrigatória!")
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

        setAuth(true);

        toast.success("Cadastro feito com sucesso!");

        history1("/");
      })
      .catch((_) =>
        toast.error(
          "Erro ao cadastrar. Email já cadastrado ou falha na conexão."
        )
      );
  };

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
