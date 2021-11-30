import { ListItem, Container, Figure, Section } from "./styles";

const SugestionCards = ({ elt, index }) => {
  return (
    <ListItem>
      <Container>
        <Figure>
          <img src={elt.selfie} alt={elt.name} />
          <figcaption>{elt.name}</figcaption>
        </Figure>
        <Section>
          <h4>{elt.username}</h4>
          <p>{elt.name}</p>
        </Section>
      </Container>
      <button onClick={}>Sair</button>
    </ListItem>
  );
};
export default SugestionCards;
