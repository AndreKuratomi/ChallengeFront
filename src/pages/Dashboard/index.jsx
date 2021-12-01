import { Link } from "react-router-dom";

import DashHeader from "../../components/DashHeader";
import FriendsNet from "../../components/FriendsNet";
import FriendsContainers from "../../components/FriendsContainers";
import DashAside from "../../components/DashAside";

import {
  BodyContainer,
  MainContainer,
  Feeds,
  Footer,
  Nav,
  A,
  Section,
} from "./styles";

const Dashboard = () => {
  return (
    <BodyContainer>
      <DashHeader />
      <MainContainer>
        <Feeds>
          <FriendsNet />
          <FriendsContainers />
        </Feeds>
        <DashAside />
      </MainContainer>
      <Footer>
        <Nav>
          <A>
            <Link to="https://about.instagram.com/">Sobre</Link>
          </A>
          <A>
            <A>
              <Link to="https://help.instagram.com/">Ajuda</Link>
            </A>
            <Link to="https://about.instagram.com/blog">Blog</Link>
          </A>
          <A>
            <A>
              <Link to="https://developers.facebook.com/docs/instagram">
                API
              </Link>
            </A>
            <Link to="https://about.instagram.com/about-us/careers">
              Carreiras
            </Link>
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
            <Link to="https://www.instagram.com/explore/locations/">
              Localizações
            </Link>
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
        </Nav>
        <Section>
          <A>Português (Brasil)</A>
          <A>&copy; 2021 INSTAGRAM FROM META</A>
        </Section>
      </Footer>
    </BodyContainer>
  );
};
export default Dashboard;
