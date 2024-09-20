import { Image } from "react-bootstrap";
import imgenBanner from "../assets/logo_blanco_naranja.png"

const Banner = () => {
  return (
    <>
      <Image className=" w-75 " src={imgenBanner}></Image>
    </>
  );
};

export default Banner;
