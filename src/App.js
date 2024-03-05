import monitor from './monitor.jpg'
import ipad from './ipad.png'
import phone from './phone.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <h2>Owerview Page</h2>
        </div>
        <div>
          <img src={monitor} alt="" />
          <img src={ipad} alt="" />
          <img src={phone} alt="" />
        </div>
        <div></div>
        <h1>Hello world1 </h1>

      </header>


    </div>
  );
}

export default App;
