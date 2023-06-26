import './App.css';
import User from './User';

function App() {
  function Common() {
    return <div>Component inside Component</div>;
  }

  return (
    <>
      <div className="App">
        <h1>Hello World</h1>
        <User />
        {Common()}
      </div>
    </>
  );
}

export default App;
