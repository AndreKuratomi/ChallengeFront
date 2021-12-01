import styled from "styled-components";

export const Page = styled.body`
  display: flex;
  flex-direction: column;
`;

export const SuperContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 1rem;
  } ;
`;

export const Image = styled.figure`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    img {
      height: 390px;
    }
  } ;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 70vh;
`;

export const Container = styled.div`
  border: 1px solid var(--light-gray);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 1rem;
  margin-top: 1rem;
`;

export const ContainerApps = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 1rem;
`;

export const ContainerForAppLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 1rem;
`;

export const ImageLink = styled.img`
  margin: 0.2rem;
  width: 8rem;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
  text-align: center;

  @media screen and (min-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
  } ;
`;

export const A = styled.a`
  line-height: normal;
  text-decoration: none;
  font-size: small;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  @media screen and (min-width: 1024px) {
    margin-bottom: 0.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
  } ;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 1rem;
`;
