import { users } from "../../assets/users";

import SocialNetCards from "../SocialNetCards";

import { Section } from "./styles";

const SocialNet = () => {
  //   const [contact, setContact] = useState();
  return (
    <Section>
      {users.map((elt, index) => (
        <SocialNetCards elt={elt} index={index} />
      ))}
    </Section>
  );
};
export default SocialNet;
