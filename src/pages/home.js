import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/contacts" style={{ marginLeft: "5px" }}>
        Contacts
      </Link>
      <h1>Welcome to Home page</h1>;
    </div>
  );
};

export default Home;
