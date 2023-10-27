import Navbar from './components/Navbar';
import Rules from './components/Rules';
import Jello from './components/Jello';
import Goals from './components/Goals';
import Store from './components/Store';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
      </header>
      <div className="container1">
        <Rules/>
        <Jello/>
        <Goals/>
      </div>

      <div>
        <Store/>
      </div>
      
    </div>
  );
}

export default App;
