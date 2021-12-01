import { Link } from "react-router-dom";

import InstagramTextLogo from "../../components/InstagramTextLogo";
import FormRegister from "../../components/FormRegister";

import signUpInsta from "../../assets/signUpLandscape.png";
import appleStore from "../../assets/AppleStore.png";
import googlePlay from "../../assets/GooglePlay.png";

import {
  Page,
  SuperContainer,
  LoginContainer,
  Container,
  ContainerForAppLinks,
  Image,
  Footer,
  Nav,
  A,
  Section,
  ImageLink,
} from "./styles";

const SignUp = () => {
  return (
    <Page>
      <SuperContainer>
        <LoginContainer>
          <Container>
            <InstagramTextLogo />
            <button>
              <Link to="/">Entrar com Facebook</Link>
            </button>
            <FormRegister />
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
