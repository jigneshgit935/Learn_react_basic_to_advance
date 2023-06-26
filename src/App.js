import './App.css';

function App() {
  const demo = () => {
    alert('Hello button is clicked');
  };
  return (
    <>
      <div className="App">
        <h1>Hello World</h1>
        <button onClick={demo}>Click me</button>
        {/* <button onClick={() => demo()}>Click me</button> */}
        {/* <button onClick={() => alert('Hello Event without making external function')}>Click me</button> */}
      </div>
    </>
  );
}

export default App;
