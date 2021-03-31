import Navbar from "./components/Navbar";
import QuoteCard from "./components/QuoteCard";

function App() {
  return (
    <div className="App">
        
        {/*Appel de la fonction Navbar*/}
      <Navbar />
      
      <QuoteCard />
    </div>
  );
}

export default App;
