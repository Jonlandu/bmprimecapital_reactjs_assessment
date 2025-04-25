import logo from '../public/assets/logo.jpeg'
import icon from '../public/assets/home.svg'
import './App.css'
import {Button} from "./components/button";

function App() {

  return (
    <>
        <div className="layout">
            <div className="logo-container">
                <a href="/">
                    <img src={logo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <div>
                <Button icon={icon} title="Dev Test"/>
            </div>

        </div>

    </>
  )
}

export default App
