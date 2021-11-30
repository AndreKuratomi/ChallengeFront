import { Container, FeedHeader, FeedHeaderUser, FeedItself } from "./styles";

const UsersPosts = ({ elt, index }) => {
  return (
    <Container key={index}>
      <FeedHeader>
        <FeedHeaderUser>
          <img src={elt.selfie} alt={elt.name} />
          <figcaption>{elt.name}</figcaption>
        </FeedHeaderUser>
        <h4>{elt.name}</h4>
      </FeedHeader>
      <FeedItself>
        <img src={elt.personalFeed} alt={elt.postName} />
        <figcaption>{elt.postName}</figcaption>
      </FeedItself>
    </Container>
  );
};
export default UsersPosts;
