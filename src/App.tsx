import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar';
import './styles/main.css';


function App() {

  return (
    <>
      <div className='App'>
      <div>
        <a href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 id="HPTitle">HP React App</h1>
      <div className="card">
        <Navbar switchTheme={undefined} />
      </div>
      </div>
    </>
  )
}

export default App
