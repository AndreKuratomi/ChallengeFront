import styled from "styled-components";

export const Section = styled.section`
  background-color: #fff;
  border: 1px solid #b6bbcb;
  display: flex;
  flex-direction: row;
  justify-content: left;
  min-width: 480px;
  margin-bottom: 1rem;

  img {
    border-image: linear-gradient(yellow red blue);
    border-radius: 50%;
    width: 4.5rem;
  }
`;
