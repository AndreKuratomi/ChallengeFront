import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link, Navigate, useNavigate } from "react-router-dom";

import api from "../../services/api";

import { Form, Input, ErrorDiv, S } from "./styles";

const FormLogin = () => {
  const formSchema = yup.object().shape({
    email: yup.string().email().required(""),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(6, "Mínimo de 6 caracteres!")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>?]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Sua senha está incorreta. Confira-a."
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const history2 = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    api
      .post("/login", data)
      .then((response) => {
        // const { token } = response.data;
        // console.log(response);

        // localStorage.getItem("@Provi:token", JSON.stringify(token));
        // jwt
        // localStorage.setItem("@Kenziehub:id", response.data.user.id);

        // setAuthenticated(true);

        // toast.success("Login feito com sucesso!");

        history2("/dashboard");
      })
      .catch(
        (_) =>
          console.log(
            "Erro ao logar. Senha e/ou email incorretos ou erro de conexão."
          )
        // toast.error(

        // )
      );
  };

  // if (authenticated) {
  //   return <Navigate to="/dashboard" />;
  // }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Telefone, nome de usuaŕio ou email"
        {...register("email")}
      />
      {/* {errors.email && <Div>{errors.email.message}</Div>} */}
      <Input type="password" placeholder="Senha" {...register("password")} />
      <button type="submit">Entrar</button>
      <p>Ou</p>
      <p>
        <Link to="/">
          <S>Entrar com Facebook</S>
        </Link>
      </p>
      {errors.password && <ErrorDiv>{errors.password.message}</ErrorDiv>}
    </Form>
  );
};
export default FormLogin;
