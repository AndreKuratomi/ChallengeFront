import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link, Navigate, useNavigate } from "react-router-dom";

import loginInsta from "../../assets/LoginLandscape.jpeg";
import instagram from "../../assets/Instagram.png";
import appleStore from "../../assets/AppleStore.png";
import googlePlay from "../../assets/GooglePlay.png";

// import api from "../../services/api";

import {
  Page,
  SuperContainer,
  LoginContainer,
  Container,
  ImageLogo,
  ContainerApps,
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

const Login = () => {
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

  // const history2 = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    //   api
    //     .post("/sessions", data)
    //     .then((response) => {
    //       const { token } = response.data;

    //       localStorage.setItem("@Kenziehub:token", JSON.stringify(token));
    //       localStorage.setItem("@Kenziehub:id", response.data.user.id);

    //       setAuthenticated(true);

    //       toast.success("Login feito com sucesso!");

    //       return history2.push("/dashboard");
    //     })
    //     .catch((err) =>
    //       toast.error(
    //         "Erro ao logar. Senha e/ou email incorretos ou erro de conexão."
    //       )
    //     );
  };

  // if (authenticated) {
  //   return <Navigate to="/dashboard" />;
  // }

  return (
    <Page>
      <SuperContainer>
        <Image>
          <img src={loginInsta} alt="loginInsta" />
        </Image>
        <LoginContainer>
          <Container>
            <ImageLogo src={instagram} alt="Instagram" />
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Telefone, nome de usuaŕio ou email"
                {...register("email")}
              />
              {/* {errors.email && <Div>{errors.email.message}</Div>} */}
              <Input
                type="password"
                placeholder="Senha"
                {...register("password")}
              />
              <button type="submit">Entrar</button>
              <p>Ou</p>
              <p>
                <Link to="/">Entrar com Facebook</Link>
              </p>
              {errors.password && (
                <ErrorDiv>{errors.password.message}</ErrorDiv>
              )}
            </Form>
          </Container>
          <Container>
            <p>
              Não tem conta?
              <Link to="/signup"> Cadastre-se</Link>.
            </p>
          </Container>
          <ContainerApps>
            <p>Obtenha o aplicativo</p>
            <ContainerForAppLinks>
              <ImageLink src={appleStore} alt="AppleStore" />
              <ImageLink src={googlePlay} alt="GooglePlay" />
            </ContainerForAppLinks>
          </ContainerApps>
        </LoginContainer>
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
        <Nav>
          <A>
            <Link to="https://www.instagram.com/topics/beauty/">Beleza</Link>
          </A>
          <A>
            <Link to="https://www.instagram.com/topics/dance-and-performance/">
              Dança
            </Link>
          </A>
          <A>
            <Link to="https://www.instagram.com/topics/fitness/">Fitness</Link>
          </A>
          <A>
            <Link to="https://www.instagram.com/topics/food-and-drink/">
              Comida e bebida
            </Link>
          </A>
          <A>
            <Link to="https://www.instagram.com/topics/home-and-garden/">
              Casa e jardim
            </Link>
          </A>
          <A>
            <Link to="https://www.instagram.com/topics/music/">Música</Link>
          </A>
          <A>
            <Link to="https://www.instagram.com/topics/visual-arts/">
              Artes visuais
            </Link>
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

export default Login;
