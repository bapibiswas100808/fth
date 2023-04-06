import "./App.css";
import Banner from "./components/Banner/Banner";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Gallery />
    </div>
  );
}

export default App;
