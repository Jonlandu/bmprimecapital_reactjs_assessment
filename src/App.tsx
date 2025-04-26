import logo from "/assets/logo.jpeg";

import "./App.css";
import DefaultLayout from "./layouts/Default";

function App() {
  return (
    <>
      <div className="layout">
        <div className="logo-container">
          <a href="/">
            <img src={logo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div>
          <DefaultLayout />
        </div>
      </div>
    </>
  );
}

export default App;
