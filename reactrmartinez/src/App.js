
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ReactLogo from './assets/img/reactlogo.jpg';
import ReactLog from './assets/img/reactlog.png'

const style =  {
  backgroundColor: 'grey',
  fontSize: '25px',

}

NavBar()

function App() {
  return (
      <div className="App" style={ style } onClick=''>
          <h1>ReactMrafael</h1>
          <img src={ReactLogo} alt="img" />
          <NavBar />
          <img src={ReactLog} alt="img" />
      </div>
  );
}

export default App;
