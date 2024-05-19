import "./App.css";
import { Header } from "./components/nav/nav-left/header.component";
import { Main } from "./components/nav/nav-right/main.component";

function App() {
  return (
    <div className="main-container">
      <div>
        <Header />
      </div>
      <div>
        <div className="overlay"></div>
        <Main />
      </div>
    </div>
  );
}

export default App;
