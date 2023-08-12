import logo from './logo.svg';
import './App.css';
import Header from './componet/Header/Header';

function App() {
  const studernt =[{
    name: 'farhad',
    age: 20,
    classname:'eight'
  },{
    name:'rokib',
    age:30,
    classname:'nine'
  }]
  return (
    <div className="App">
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Header></Header>
        
        {/* {
          studernt.map(id=><Header student={id} key={id.age}></Header>)
        } */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
