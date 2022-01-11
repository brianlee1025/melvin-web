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
import AboutUs from "./components/pages/AboutUs/AboutUs";
import Footer from "./components/common/Footer/Footer";

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
            <Route path="/aboutUs" component={AboutUs} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <WhatsAppButton />
        <GoTopButton />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
