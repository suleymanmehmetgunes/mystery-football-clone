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
        <Content />
      </Router>
    </div>
  );
}

export default App;
