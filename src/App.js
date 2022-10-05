import "./scss/App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";

import data from "./data.js";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Card data={data} />
    </div>
  );
}

export default App;
