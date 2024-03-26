import './App.css';
import { FcSearch } from "react-icons/fc";
import { ImFilter } from "react-icons/im";



function App() {
  return (
    <div className="App">
      <div className="top">
      <h1>🧺Basket<span>.com</span></h1>
      <div className="nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Cart</a></li>
        <li><a href="#">Signup</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Profile</a></li>
      </ul>
      </div>
      </div>
      
      <header className="App-header">
        <div className="top-next">
          <label>
          <FcSearch />
          </label>
          <input type='text' placeholder='Search items'></input>
          <button className='search'>Search</button>
        </div>
        <div className='DropDown'>
         <label>
          <ImFilter />
         </label>
         <div className='Drop'>
         <button className='dropdownbtn'>Categories</button>
         <div id='DD' className='dropdown-content'>
          <a href='#'>Fruits & Vegetables</a>
          <a href='#'>Accessories</a>
          <a href='#'>Dress</a>
          <a href='#'>Baby Products</a>
          <a href='#'>Toys</a>
         </div>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
