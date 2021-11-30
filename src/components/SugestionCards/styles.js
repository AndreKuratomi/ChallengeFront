import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5rem;
`;

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 0.65rem;

  img {
    border-radius: 50%;
    width: 4rem;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;

  p {
    font-size: small;
  }
`;
