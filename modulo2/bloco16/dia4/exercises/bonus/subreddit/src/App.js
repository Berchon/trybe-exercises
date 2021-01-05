import Header from './components/Header';
import List from './components/List';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App-container">
        <h1 className="App-title">My subreddit</h1>
        <Header />
        <List />
      </main>
    </div>
  );
}

export default App;
