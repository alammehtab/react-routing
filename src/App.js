import "./styles.css";
import { Route, Switch } from "react-router-dom";

// import the pages that you have in your app
import Home from "./pages/home";
import About from "./pages/about";
import Contacts from "./pages/contacts";

export default function App() {
  return (
    <div className="App">
      {/* now this is the actual routing setting */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
      </Switch>
    </div>
  );
}
