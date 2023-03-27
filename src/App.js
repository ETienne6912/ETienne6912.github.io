import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}


export default App;
