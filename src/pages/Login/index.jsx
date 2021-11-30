import { Link } from "react-router-dom";

import FormLogin from "../../components/FormLogin";
import InstagramTextLogo from "../../components/InstagramTextLogo";

import loginInsta from "../../assets/LoginLandscape.jpeg";

import appleStore from "../../assets/AppleStore.png";
import googlePlay from "../../assets/GooglePlay.png";

import {
  Page,
  SuperContainer,
  LoginContainer,
  Container,
  SRegister,
  ContainerApps,
  ContainerForAppLinks,
  Image,
  Footer,
  Nav,
  A,
  Section,
  ImageLink,
} from "./styles";

const Login = () => {
  return (
    <Page>
      <SuperContainer>
        <Image>
          <img src={loginInsta} alt="loginInsta" />
        </Image>
        <LoginContainer>
          <Container>
            <InstagramTextLogo />
            <FormLogin />
          </Container>
          <Container>
            <p>
              Não tem conta?
              <Link to="/signup">
                <span> Cadastre-se</span>
              </Link>
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
