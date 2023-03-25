
import { useEffect } from 'react';
import { useState } from 'react';
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
  //  products.map(product=> <Product name={product.name} price={product.price}></Product>)
   }
   {/* <Product name='Laptop' price="61000"></Product>
   <Product name='Xiaomi' price="30000"></Product>
   <Product name='Watch' price="4500"></Product>
   <Product name='Sunglass' price="300"></Product> */}
<Count></Count>
<ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers(){
  const [users,setUsers]= useState([]);
  useEffect(()=>{
 fetch('https://jsonplaceholder.typicode.com/users')
 .then(res=>res.json())
 .then(data=>setUsers(data))

  },[])
  return (
    <div>
    <h1>External user</h1>
    {
      users.map(user=><User name={user.name} email={user.email}></User>)
    }
    </div>
  )
}

function User(props){
return (
  <div>
      <h4>Name : {props.name}</h4>
  <p>Email : {props.email}</p>
  </div>
)
}


function Count(){
  const [count,setCount]= useState(33)
  const increaseCount =()=>{
    const newCount = count +1;
   setCount(newCount)
  }
  const decreaseCount =()=>{
    const newCount = count -1;
   setCount(newCount)
  }
  return (
    <div>
      <h1>Count : {count}</h1>
     <button onClick={increaseCount}>Increase</button>
     <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}


// function Product(props){
//   return <div className='product'>
// <h3>Name :{props.name} </h3>
// <p>Price : {props.price} tk</p>
//   </div>
// }





































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
