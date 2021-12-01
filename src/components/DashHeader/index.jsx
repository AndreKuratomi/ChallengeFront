import { Link } from "react-router-dom";
import InstagramTextLogo from "../InstagramTextLogo";

import { Header, Input, Button } from "./styles";

const DashHeader = ({ logout }) => {
  return (
    <Header>
      <InstagramTextLogo />
      <Input placeholder="Pesquisar" />
      <Button onClick={logout}>
        <Link to="/">Sair</Link>
      </Button>
    </Header>
  );
};
export default DashHeader;
