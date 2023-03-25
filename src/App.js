import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
  <Person name="Shah Rukh Khan" profession ="Actor"></Person>
  <Person2 name="Kajol Devgun" profession="Actress"></Person2>
  <Person name="Hrittik Rooshan" profession="Actor"></Person>
  <Person2 name="Deepika Padukone" profession="Actress"></Person2>
    </div>
  );
}
function Person(props){
  return (
    <div className='person'>
       <h1>{props.name}</h1>
       <p>Profession: {props.profession}</p>
    </div>
  )
  
}
function Person2(props) {
  return (
    <div className='person2'>
       <h1>{props.name}</h1>
       <p>Profession :{props.profession}</p>
    </div>
  )

}

export default App;
