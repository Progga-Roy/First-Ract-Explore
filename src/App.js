
import './App.css';

function App() {
  // const nayoks =['Shah Rukh Khan','Hrirrik Rooshan','Amir Khan','Salman Khan']
  const products =[
    {name:'Laptop', price:61000},
    {name:'Xiaomi', price:30000},
    {name:'Watch', price:4500},
    {name:'sunglass', price:300},
  ] 
  return (
    
    <div className="App">

      {/* {
    nayoks.map(nayok=><li>Name: {nayok}</li>)
  }
  <Person name="Shah Rukh Khan" profession ="Actor"></Person>
  <Person2 name="Kajol Devgun" profession="Actress"></Person2>
  <Person name="Hrittik Rooshan" profession="Actor"></Person>
  <Person2 name="Deepika Padukone" profession="Actress"></Person2>
   */
   products.map(product=> <Product name={product.name} price={product.price}></Product>)
   }
   {/* <Product name='Laptop' price="61000"></Product>
   <Product name='Xiaomi' price="30000"></Product>
   <Product name='Watch' price="4500"></Product>
   <Product name='Sunglass' price="300"></Product> */}
    </div>
  );
}

function Product(props){
  return <div className='product'>
<h3>Name :{props.name} </h3>
<p>Price : {props.price} tk</p>
  </div>
}





































// function Person(props){
//   return (
//     <div className='person'>
//        <h1>{props.name}</h1>
//        <p>Profession: {props.profession}</p>
//     </div>
//   )
  
// }
// function Person2(props) {
//   return (
//     <div className='person2'>
//        <h1>{props.name}</h1>
//        <p>Profession :{props.profession}</p>
//     </div>
//   )

// }

export default App;
