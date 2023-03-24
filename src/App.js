import logo from './logo.svg';
import './App.css';
// const number =202003312;
const singer ={name :'Mahafuzur Rahman', job: 'singer'}
const singer2 ={name :'Eva Rahman', job: 'singer'}
const singerStyle ={
  backgroundColor :'lightBlue',
  color : 'blue'
}
const singerStyle2 ={
  backgroundColor :'lightPink',


}

function App() {
  return (
    <div className="App">
    <div className="countries">
      <h1>Hlw React Dude</h1>
      <p style={singerStyle} className='music'>Name: {singer.name} <br />  Profession: {singer.job} </p>
      <p  style={singerStyle2} className='music'>Name: {singer2.name} <br />  Profession: {singer2.job} </p>
    </div>
    </div>
  );
}

export default App;
