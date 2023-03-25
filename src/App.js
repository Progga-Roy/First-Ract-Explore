import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
  <Person></Person>
  <Person2></Person2>
  <Person></Person>
  <Person2></Person2>
    </div>
  );
}
function Person(){
  return (
    <div className='person'>
       <h1>Shah Rukh Khan</h1>
       <p>Profession : Actor</p>
    </div>
  )
  
}
function Person2() {
  return (
    <div className='person2'>
       <h1>Hrittik Roshan</h1>
       <p>Profession : Actor</p>
    </div>
  )

}

export default App;
