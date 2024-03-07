import monitor from './monitor.jpg'
import ipad from './ipad.png'
import phone from './phone.png'
import img from './foto.jpg'
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

          <ul className='ulww'>
            <li>Davon</li>
            <li>Abdumalik</li>
            <li>Ruhshona</li>
            <li>Va yana men</li>
          </ul>
        </div>
      </main>


      <div className="leftww">
        <div className='left-ss1'>
          <h4>Search</h4>
          <input type="text" placeholder='Enter search term...' />
          <button className='sasasa'>Go</button>
          <hr />
        </div>
        <div className='left-ss2'>
          <h4>Categories</h4>
          <div className="types_1">
            <span href="#">Sspanlom</span>
            <span href="#">Sspanlom</span>
            <span href="#">Sspanlom</span>
          </div>
          <div className="types_2">
            <span href="#">Sspanlom</span>
            <span href="#">Sspanlom</span>
            <span href="#">Sspanlom</span>
          </div>
          <hr />

        </div>
        <div className='left-ss3'>
          <h4>Side Widget</h4>
          <hr />
          p
          You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!
        </div>
      </div>

      <div className="fotos">
        <div className="big-foto">
          <div className="type">
            <img src={img} alt="" />
            <p>January 1, 2023</p>
            <h2>Featured Post Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
            <button>Read more</button>
          </div>
        </div>

        <div className="fotosss">
          <div className="foto_1">
            <img className='fff-222' src={img} alt="" />
            <p>January 1, 2023</p>
            <h4>Featured Post Title</h4>
            <p>e, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
            <button>Read more</button>
          </div>
          <div className="foto_2">
            <img className='fff-222' src={img} alt="" />
            <p>January 1, 2023</p>
            <h4>Featured Post Title</h4>
            <p>e, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
            <button>Read more</button>
          </div>

          <div className="foto_3">
            <img className='fff-222' src={img} alt="" />
            <p>January 1, 2023</p>
            <h4>Featured Post Title</h4>
            <p>e, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
            <button>Read more</button>
          </div>
          <div className="foto_4">
            <img className='fff-222' src={img} alt="" />
            <p>January 1, 2023</p>
            <h4>Featured Post Title</h4>
            <p>e, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
            <button>Read more</button>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button>Newer</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>...</button>
        <button>15</button>
        <button>Older</button>
      </div>
      <footer>
        <p>Copyright © Your Website 2023</p>
      </footer>

    </div>
  );
}

export default App;
