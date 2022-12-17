import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';
import AddItem from './components/AddItem';
import Footer from './components/Footer';

function App() {
  const products = [
  {
  price: 700,
  name: "Jockey V-shape",
  quantity: 0,
  },
  {
    price: 1100,
    name: "Shirt L-size",
    quantity: 0,
    },
    {
      price: 1999,
      name: "Denim Jeans",
      quantity: 0,
      }
  ]

let [productList, setProductList]=useState(products);
let [totalAmount, setTotalAmount] = useState(0);

const incrementQuantity=(index)=>{
let newProductList=[...productList];
let newTotalAmount = totalAmount;
newProductList[index].quantity++;
newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
setProductList(newProductList);
};

const decrementQuantity = (index) => {
  let newProductList = [...productList];
  let newTotalAmount = totalAmount;
  if (newProductList[index].quantity > 0) {
    newProductList[index].quantity--;
    newTotalAmount -= newProductList[index].price;
  }
  setTotalAmount(newTotalAmount);
  setProductList(newProductList);
};

const resetQuantity = () => {
  let newProductList = [...productList];
  newProductList.map((products) => {
    products.quantity = 0;
  });
  setProductList(newProductList);
  setTotalAmount(0);
};


const removeItem = (index) => {
  let newProductList = [...productList];
  let newTotalAmount = totalAmount;
  newTotalAmount -=
    newProductList[index].quantity * newProductList[index].price;
  newProductList.splice(index, 1);
  setProductList(newProductList);
  setTotalAmount(newTotalAmount);
};

const addItem = (name, price) => {
  let newProductList = [...productList];
  newProductList.push({
    price: price,
    name: name,
    quantity: 0,
  });
  setProductList(newProductList);
};


  return (
   <>
    <Navbar/>
    <main className="container mt-5">
    <ProductList productList={productList} incrementQuantity={this.incrementQuantity} decrementQuantity={decrementQuantity}
          removeItem={removeItem}/>
    </main>
    
    <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
   </>
  );
}

export default App;
