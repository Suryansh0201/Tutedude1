import Navbar from "./components/Navbar/navbar";
import MidContent from "./components/MidContent/midContent";
import BottomContent from "./components/BottomContent/bottomContent";
import Footer from "./components/Footer/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MidContent />
      <BottomContent />
      <Footer />
    </div>
  );
}

export default App;
