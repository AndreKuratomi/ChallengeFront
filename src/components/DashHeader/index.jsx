import InstagramTextLogo from "../InstagramTextLogo";

import { Header } from "./styles";

const DashHeader = () => {
  return (
    <Header>
      <InstagramTextLogo />
      <input placeholder="Pesquisar" />
      {/* <Icons /> */}
    </Header>
  );
};
export default DashHeader;
