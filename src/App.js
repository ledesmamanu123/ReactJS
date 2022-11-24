import './App.css';
import Title from './components/title/title';

function App() {
  const lista =["Resident Evil", "God Of War", "My little pony", "FIFA 23"];
  return (
    <div className="App">
      <header className="App-header">
        <Title title="Playz" lists={lista} />
      </header>
    </div>
  );
}

export default App;
