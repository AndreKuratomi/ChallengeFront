import { Container, Figure } from "./styles";

const FriendsCards = ({ elt, index }) => {
  return (
    <Container key={index}>
      <Figure>
        <img src={elt.selfie} alt={elt.name} />
        <figcaption>{elt.name}</figcaption>
      </Figure>
      <p>{elt.name}</p>
    </Container>
  );
};

export default FriendsCards;
