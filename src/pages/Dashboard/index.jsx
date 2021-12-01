import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

import jwt_decode from "jwt-decode";

import DashHeader from "../../components/DashHeader";
import FriendsNet from "../../components/FriendsNet";
import FriendsContainers from "../../components/FriendsContainers";
import DashAside from "../../components/DashAside";

import { useAuth } from "../../Providers/Auth/auth";

import {
  BodyContainer,
  MainContainer,
  Feeds,
  DashFooter,
  Nav,
  A,
  Section,
} from "./styles";

const Dashboard = () => {
  console.log("churros");
  const { auth, setAuth } = useAuth();

  if (!auth) {
    return <Navigate to="/login" />;
  }

  const logout = () => {
    localStorage.clear();
    return setAuth(false);
  };

  return (
    <BodyContainer>
      <DashHeader logout={logout} />
      <MainContainer>
        <Feeds>
          <FriendsNet />
          <FriendsContainers />
        </Feeds>
        <DashAside />
      </MainContainer>
      <DashFooter>
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
      </DashFooter>
    </BodyContainer>
  );
};
export default Dashboard;
