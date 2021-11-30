import { Link } from "react-router-dom";

import instagram from "../../assets/Instagram.png";

import { TextLogo } from "./styles";

const InstagramTextLogo = () => {
  return (
    <TextLogo>
      <Link to="/dashboard">
        <img src={instagram} alt="Instagram" />
      </Link>
      <figcaption>Instagram text logo</figcaption>
    </TextLogo>
  );
};
export default InstagramTextLogo;
