import { candidates } from "../../assets/users";

import SugestionCards from "../SugestionCards";

import { Section, List } from "./styles";

const ListSugestions = () => {
  return (
    <Section>
      <h1>Sugestões para você</h1>
      <List>
        {candidates.map((elt, index) => (
          <SugestionCards elt={elt} index={index} />
        ))}
      </List>
    </Section>
  );
};
export default ListSugestions;
