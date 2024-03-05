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
          <div >
            <img className='img_1' src={monitor} alt="" />
            <img className='img_1' src={ipad} alt="" />
            <img className='img_1' src={phone} alt="" />
          </div>
          <div className='right'>
            <span>Git</span>
            <button>Free Download</button>
          </div>
        </div>

      </header>

      <main>
        <div className="start">
          <h1>Start Bootstrap</h1>

          <ul>
            <li>Davon</li>
            <li>Abdumalik</li>
            <li>Ruhshona</li>
            <li>Va yana men</li>
          </ul>
        </div>
      </main>

    </div>
  );
}

export default App;
