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
            <Link to="https://apps.apple.com/app/instagram/id389801252?vt=lo">
              <ImageLink src={appleStore} alt="AppleStore" />
            </Link>
            <Link to="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=3B78DE43-D3B6-4363-97F1-B47EDDE8102B&utm_content=lo&utm_medium=badge">
              <ImageLink src={googlePlay} alt="GooglePlay" />
            </Link>
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
