import logo from "./logo.svg";
import "./App.css";
import { Header, Footer, Sidebar, Selection } from "./Components";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="middle__content">
        <Sidebar />
        <Selection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
