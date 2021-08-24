import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Link to="/" exact>
        Home
      </Link>
      <Link to="/contacts" style={{ marginLeft: "5px" }}>
        Contacts
      </Link>
      <h1>Welcom to About page</h1>
    </div>
  );
};

export default About;
