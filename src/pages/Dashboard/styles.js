import styled from "styled-components";

export const BodyContainer = styled.body`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
`;

export const Feeds = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  max-width: 335px;

  @media screen and (min-width: 1024px) {
    display: none;
  } ;
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
    /* justify-content: space-around; */
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
