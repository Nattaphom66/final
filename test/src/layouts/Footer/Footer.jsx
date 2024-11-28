import "./Footer.css";
import { Link } from "react-router-dom";

function Footer({ tab, setTab }) {
  return (
    <div className="footer-bar">
      <Link to={"/home"}>
        <button
          className={
            "bi " +
            (tab === "home" ? "bi-house-door-fill" : "bi-house-door") +
            " button-clear"
          }
          style={{ fontSize: "24px", color: "black" }}
          onClick={() => {
            setTab("home");
          }}
        ></button>
      </Link>
      <Link to={"/search"}>
        <button
          className="bi bi-search + button-clear"
          style={{ fontSize: "24px", color: "black" }}
          onClick={() => {
            setTab("search");
          }}
        ></button>
      </Link>
      <Link to={"/Newpost"}>
        <button
          className="bi bi-plus-square + button-clear"
          style={{ fontSize: "24px", color: "black" }}
          onClick={() => {
            setTab("Newpost");
          }}
        ></button>
      </Link>
      <Link to={"/#"}>
        <button
          className="bi bi-broadcast + button-clear"
          style={{ fontSize: "24px", color: "black" }}
          onClick={() => {
            setTab("live");
          }}
        ></button>
      </Link>
      <Link to={"/Profile"}>
        <button
          className={
            "bi " +
            (tab === "Profile" ? "bi bi-person-fill" : "bi bi-person") +
            " button-clear"
          }
          style={{ fontSize: "24px", color: "black" }}
          onClick={() => {
            setTab("Profile");
          }}
        ></button>
      </Link>
    </div>
  );
}

export default Footer;
