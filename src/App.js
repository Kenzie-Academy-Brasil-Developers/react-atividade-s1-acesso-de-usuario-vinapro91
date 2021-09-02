import logo from "./logo.svg";
import "./App.css";
import RestrictedPage from "./components/RestrictedPage";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nameInput, setNameInput] = useState("");
  function Logout() {
    setIsLoggedIn(false);
  }
  function Login() {
    setIsLoggedIn(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input onChange={(e) => setNameInput(e.target.value)}></input>
        <RestrictedPage
          isLoggedIn={isLoggedIn}
          Login={Login}
          Logout={Logout}
          user={nameInput}
        ></RestrictedPage>
      </header>
    </div>
  );
}

export default App;
