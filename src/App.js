import React, { useState, useEffect } from 'react';
// import Products from './components/Products';
// import Box from './components/Box/Box';
// import Home from './components/Main/NavBar'
// import Product from './components/Product';
import dataFake from './dataFake';
import Routers from './routers'
import apiRequest from './api/productApi';
import apiCategory from './api/categoryApi';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import AddProduct from './components/AddProduct';
function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  // const [status, setStatus] = useState(false);
  // const [color, setColor] = useState('green');
  // const onHandleClick = () => {
  //   // setStatus(true);
  //   setColor('red');
  // }
  const onHandleRemove = async (id) => {
    try {
      const { data } = await apiRequest.remove(id);
      const newProducts = products.filter(product => product.id !== data.id);
      setProducts(newProducts);
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

   useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();

    const getCategories = async () => {
      try {
        const { data } = await apiCategory.getAll();
        setCategories(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getCategories();
  }, []);

  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  // const onHandleUpdate = async(id, product, updateProduct) => {
  //   const { data } = await apiRequest.update(id,product);
  //   const newPros = products.map(product => (
  //     product.id === updateProduct.id ? updateProduct : product  // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
  //   ))
  // }
  
  const onHandleAddCate =  async(category) => {
      const { data } = await apiCategory.create(category);
    setCategories([
      ...categories,
      data
    ])
  }

  return (
    <div className="App">
      <Routers products={products} 
      onRemove={onHandleRemove} 
      onAdd={onHandleAdd} 
      onAddCate={onHandleAddCate} 
      categories={categories}
       />
    </div>
  )

}
export default App;