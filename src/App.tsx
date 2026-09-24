import HomePage from './Pages/HomePage'
import './App.css'

function App() {
  return (
  <div className="App">

    <div className="sidebar">


            <button className="button" onClick={() => click()}>Click Me</button>

    </div>
    <div className="main-content">


    </div>


  </div>
  )
}

export default App

function click() {
    const application = document.querySelector('.App');
    application?.classList.toggle('cliked');
  }