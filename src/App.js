import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Posts></Posts>
      <DisplayPosts></DisplayPosts>
    </div>
  );
}
function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json().then((data) => setPosts(data))
    );
  }, []);
  return (
    <div>
      <h1>All Post</h1>
      {posts.map((post) => (
        <DisplayPosts
          id={post.id}
          title={post.title}
          post={post.body}
        ></DisplayPosts>
      ))}
    </div>
  );
}
function DisplayPosts(props) {
  return (
    <div className="post-container">
      <p style={{ fontWeight: "bolder" }}>ID: {props.id}</p>
      <h3>Title: {props.title}</h3>
      <p>
        <span style={{ fontWeight: "bold" }}>Post:</span> {props.post}{" "}
      </p>
    </div>
  );
}
export default App;

/*
import { useEffect, useState } from "react";

function ExternalUsers() {
  const [users, setUsers] = useState();
  // useEffect(()=>{},[])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
     
    </div>
  );
}
function User(props) {
  return (
    <div>
      
    </div>
  );
}
//---------------------------------------------
<div>
      <h2>External Users</h2>
      {users.map((user) => (
        <User name={user.name} email={user.email}></User>
      ))}
    </div>

function User(props) {
  return (
    <div className="user">
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  );
} */
// }

/*-------------------------------------
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  
  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
 
  // More shorter
  const increaseCount = () => setCount(count + 1);

 
  const decreaseCount = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
 
  // More shorter
  const decreaseCount = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}
*/
/*--------------------------------------
const products = [
    { name: "Laptop", price: "40000" },
    { name: "Mobile", price: "75000" },
    { name: "Tablet", price: "30000" },
    { name: "PC", price: "35000" },
  ];

  const arr = ["Hasib", "Mahim", "sakib"];

  <div className="App">
      {arr.map((a) => (
        <Product name={a}></Product>
      ))}

      {products.map((product) => (
        <Product name={product.name} price={product.price}></Product>
      ))}
      <Product name="Laptop" price="1000000"></Product>
      <Product name="Mobile" price="75000"></Product>
    </div>

function Product(props) {
  return (
    <div className="product">
      <h1>Name: {props.name}</h1>
      <p style={{ fontWeight: "bold" }}>Price: {props.price}</p>
    </div>
  );
}
 */
