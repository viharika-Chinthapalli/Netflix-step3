import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import requests from "./request";
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'

function App() {

  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  )
}

export default App;
