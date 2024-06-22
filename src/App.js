import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CopaAmericaGroups from './components/CopaAmericaGroups';
import EuroGroups from './components/EuroGroups';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import HomeScreen from './components/HomeScreen'

function App() {

  
  return (
    <Router className="pt-8">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/euros' element={<EuroGroups />}/>
        <Route path='/copa-america' element={<CopaAmericaGroups />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
