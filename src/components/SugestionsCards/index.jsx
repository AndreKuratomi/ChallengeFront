import DashButton from "../DashButton";

import { ListItem, Container, Figure, Section } from "./styles";

const SugestionsCards = ({ elt, index, type }) => {
  return (
    <ListItem key={index}>
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
      <DashButton type={type} elt={elt}>
        Seguir
      </DashButton>
    </ListItem>
  );
};

export default SugestionsCards;
