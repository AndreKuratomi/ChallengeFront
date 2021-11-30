import DashButton from "../DashButton";

import {
  Container,
  FeedContainer,
  FeedHeader,
  FeedHeaderUser,
  FeedItself,
} from "./styles";

const FriendsPosts = ({ elt, index, type }) => {
  return (
    <Container key={index}>
      <FeedContainer>
        <FeedHeader>
          <FeedHeaderUser>
            <img src={elt.selfie} alt={elt.name} />
            <figcaption>{elt.name}</figcaption>
          </FeedHeaderUser>
          <h4>{elt.name}</h4>
        </FeedHeader>
        <DashButton type={type} elt={elt}>
          Excluir amizade
        </DashButton>
      </FeedContainer>
      <FeedItself>
        <img src={elt.personalFeed} alt={elt.postName} />
        <figcaption>{elt.postName}</figcaption>
      </FeedItself>
    </Container>
  );
};
export default FriendsPosts;
