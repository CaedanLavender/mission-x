import './App.css';
import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <div className="App">
        <NavigationBar />
        {/* Route stuff needs to go here so that each of our components will render based on url ending with /whatever */}
    </div>
  );
}

export default App;