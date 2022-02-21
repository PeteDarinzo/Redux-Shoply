import './App.css';
import Routes from "./Routes";
import NavBar from './NavBar';
import { Navbar } from 'reactstrap';

function App() {

  return (
    <div className="App">
        <NavBar />
        <Routes />
    </div>
  );
}

export default App;
