import Main from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div id="app" className="main">
      <Nav />
      <Main />
    </div>
  );
}

export default App;
