
import './App.css';
import Formbst from './componenets/Formbst';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttonbst from './componenets/Buttonbst';
import imageinSrc from "./imageinSrc.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
         
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src="/imageinPublic.png" alt="myimage" />
        <img src={imageinSrc} alt ='myImage' />
        
        <Formbst/>
        <Buttonbst/>
        
      </header>
    </div>
  );
}

export default App;
