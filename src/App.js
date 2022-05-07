/* Styles */
import "./styles/App.css";
import "./styles/navbar.css";
import "./styles/header.css";
import "./styles/calculator.css";
import "./styles/benefits.css";
import "./styles/footer.css";
/* Components */
import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Calculator />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
