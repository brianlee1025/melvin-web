import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/common/NavBar/NavBar";
import HomePage from "./components/pages/HomePage/HomePage";
import GoTopButton from "./components/common/GoTopButton/GoTopButton";
import WhatsAppButton from "./components/common/WhatsAppButton/WhatsAppButton";
import PageNotFound from "./components/common/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="main-container">
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/home" />;
              }}
            />
            <Route path="/home" component={HomePage} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <WhatsAppButton />
        <GoTopButton />
      </Router>
    </div>
  );
}

export default App;
