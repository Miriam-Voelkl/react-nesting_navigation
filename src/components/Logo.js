import Image from "./Image.js";
import "../styles.css";
import logo from "../img/logo.jpg";

export default function Logo() {
  return (
    <a href="#">
      <Image src={logo} alt="logo" />
    </a>
  );
}
