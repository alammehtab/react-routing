import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div>
      <Link to="/" exact>
        Home
      </Link>
      <Link to="/about" style={{ marginLeft: "5px" }}>
        About
      </Link>
      <h1>Welcome to Contacts page</h1>
    </div>
  );
};

export default Contacts;
