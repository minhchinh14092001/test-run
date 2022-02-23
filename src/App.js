import './App.css';
import logo from './image/logo.png'
import hat from './image/headerImg.jpeg'

function App() {
  return (
    <div>
      <div className='firsthalf'>
      <div className="logo ">
        <img src={logo} alt=""/>
      </div>
      <div className="grid1">
        <div>
          <p className="paragraphText" style={{color: "orange"}}>Great Experience In Construction</p>
          <p className="bigTitle">The Best Construction Company</p>
          <p className='paragrapghText'>At construction we strive to excel in every service we provide, adding value for our customers wherever possible, and thereby attaining national leadership in the construction industry.</p>
        <div className="button">
          <button className='button'>GET STARTED</button>
          <button className='button' style={{backgroundColor: "orange"}}>READ MORE</button>
        </div>
        </div>
        <div>
          <img src={hat} alt=""/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
