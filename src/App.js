import monitor from './monitor.jpg'
import ipad from './ipad.png'
import phone from './phone.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="box">
        <div>
          <h2>Owerview Page</h2>
        </div>
        <div>
          <img className='img_1' src={monitor} alt="" />
          <img className='img_1' src={ipad} alt="" />
          <img className='img_1' src={phone} alt="" />
        </div>
        <div>
         <span>Git</span>
          <button>Free Download</button>
        </div>
        </div>
        
        <h1>Hello world1 </h1>

      </header>


    </div>
  );
}

export default App;
