
import './App.css';
import First from './pages/First';
import Header from './Components/Header/Header';

import Data from './Data';
import { Rerender, Route } from './routing';
import { useState } from 'react';
import Cart from './Components/Cart';
import {loop} from './loop';






function App() {
 
  const{productItems}=Data;

  const[cart,setCart]=useState([]);

const addToCart = (product) => {
  const productExit = cart.find((item) => item.id === product.id)
 

if(productExit){

   setCart(loop(cart,(item)=> (item.id===product.id?{...productExit,qty:productExit.qty+1}:item)));
  
}

else{
setCart([...cart,{...product,qty:1}]);
}
  
};

const decCart=(product)=>{
if(product.qty===1){

  setCart(loop(cart,(item)=>(item.id!==product.id&&item)))

}else{
  setCart(loop(cart,(item)=> (item.id===product.id?{...product,qty:product.qty-1}:item)));
}
};



 
  return (
    <div className="App">
      <Rerender>
   <Header cartLength={cart.length}/>
   <Route path='/'>
   <First  productItems={productItems} addToCart={addToCart} />
   </Route>
   <Route path='/cart'>
   <Cart cart={cart} addToCart={addToCart} decCart={decCart}/>
   </Route>
   </Rerender>
    </div>
  );
}

export default App;
