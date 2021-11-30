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
          <h4>{elt.name}</h4>
          <p>Sugestões para você</p>
        </Section>
      </Container>
      <button>Seguir</button>
    </ListItem>
  );
};
export default SugestionCards;
