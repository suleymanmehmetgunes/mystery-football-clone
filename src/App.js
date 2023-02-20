import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import HowItWorks from "./pages/HowItWorks";
import Products from "./pages/Products";
import Delivery from "./pages/Delivery";
import TopBar from "./components/TopBar";
import Content from "./components/Content";

function App() {
  return (
    <div className="h-screen font-sans">
      <Router>
        <Content>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/how-it-works">
              <HowItWorks />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="/delivery">
              <Delivery />
            </Route>
          </Switch>
        </Content>
      </Router>
    </div>
  );
}

export default App;
