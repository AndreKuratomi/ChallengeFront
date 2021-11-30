import styled from "styled-components";

export const Section = styled.section`
  background-color: #fff;
  border: 1px solid #b6bbcb;
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-bottom: 1rem;

  img {
    /* border: 1rem solid transparent; */
    border-image: linear-gradient(yellow red blue);
    border-radius: 50%;
    width: 4.5rem;
  }
`;
