import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link, Navigate, useNavigate } from "react-router-dom";

import signUpInsta from "../../assets/signUpLandscape.png";
import instagram from "../../assets/Instagram.png";
import appleStore from "../../assets/AppleStore.png";
import googlePlay from "../../assets/GooglePlay.png";

import api from "../../services/api";

import {
  Page,
  SuperContainer,
  LoginContainer,
  Container,
  ImageLogo,
  ContainerForAppLinks,
  Form,
  Input,
  Image,
  Footer,
  ErrorDiv,
  Nav,
  A,
  Section,
  ImageLink,
} from "./styles";

const SignUp = () => {
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
        console.log(response.data.accessToken);

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
    <Page>
      <SuperContainer>
        <LoginContainer>
          <Container>
            <ImageLogo src={instagram} alt="Instagram" />
            <button>
              <Link to="/">Entrar com Facebook</Link>
            </button>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Número de celular ou email"
                {...register("email")}
              />
              <Input placeholder="Primeiro nome" {...register("name")} />
              <Input placeholder="Nome de usuário" {...register("username")} />
              <Input
                type="password"
                placeholder="Senha"
                {...register("password")}
              />
              <button type="submit">Cadastre-se</button>
              {errors.email && <ErrorDiv>{errors.email.message}</ErrorDiv>}
              {errors.name && <ErrorDiv>{errors.name.message}</ErrorDiv>}
              {errors.username && (
                <ErrorDiv>{errors.username.message}</ErrorDiv>
              )}
              {errors.password && (
                <ErrorDiv>{errors.password.message}</ErrorDiv>
              )}
            </Form>
          </Container>
          <Container>
            <p>
              Tem uma conta?
              <Link to="/"> Conecte-se</Link>
            </p>
          </Container>
          <p>Obtenha o aplicativo</p>
          <ContainerForAppLinks>
            <ImageLink src={appleStore} alt="AppleStore" />
            <ImageLink src={googlePlay} alt="GooglePlay" />
          </ContainerForAppLinks>
        </LoginContainer>
        <Image>
          <img src={signUpInsta} alt="loginInsta" />
        </Image>
      </SuperContainer>
      <Footer>
        <Nav>
          <A>
            <Link to="https://about.facebook.com/meta">Meta</Link>
          </A>
          <A>
            <Link to="https://about.instagram.com/">Sobre</Link>
          </A>
          <A>
            <Link to="https://about.instagram.com/blog">Blog</Link>
          </A>
          <A>
            <Link to="https://about.instagram.com/about-us/careers">
              Carreiras
            </Link>
          </A>
          <A>
            <Link to="https://help.instagram.com/">Ajuda</Link>
          </A>
          <A>
            <Link to="https://developers.facebook.com/docs/instagram">API</Link>
          </A>
          <A>
            <Link to="https://help.instagram.com/519522125107875">
              Privacidade
            </Link>
          </A>
          <A>
            <Link to="https://help.instagram.com/581066165581870">Termos</Link>
          </A>
          <A>
            <Link to="https://www.instagram.com/directory/profiles/">
              Principais contas
            </Link>
          </A>
          <A>
            <Link to="https://www.instagram.com/directory/hashtags/">
              Hashtags
            </Link>
          </A>
          <A>
            <Link to="https://www.instagram.com/explore/locations/">
              Localizações
            </Link>
          </A>
          <A>
            <Link to="https://www.instagram.com/web/lite/">Instagram Lite</Link>
          </A>
        </Nav>
        <Section>
          <A>Português (Brasil)</A>
          <A>&copy; 2021 Instagram from Meta</A>
        </Section>
      </Footer>
    </Page>
  );
};

export default SignUp;
