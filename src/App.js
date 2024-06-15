import './App.css';
import CopaAmericaGroups from './components/CopaAmericaGroups';
import EuroGroups from './components/EuroGroups';
import HomeScreen from './components/HomeScreen';

function App() {
  return (
    <div className="pt-16">
      <h2>
      <HomeScreen />
      <EuroGroups/>
      <CopaAmericaGroups/>

      </h2>
    </div>
  );
}

export default App;
