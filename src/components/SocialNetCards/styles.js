import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 1rem;
  padding: 1rem;
  text-align: center;
`;

export const Figure = styled.figure`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0.65rem;

  img {
    background: linear-gradient(#ff0 #f00 #f0f);
    border-radius: 50%;
    width: 3.5rem;
  }
`;
