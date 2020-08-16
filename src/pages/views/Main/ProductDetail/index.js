import React, { useState,useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';
import apiRequest from './../../../../api/productApi'

const ProductDetail = ({ products }) => {
  let { id } = useParams();
  // const product = products.find(product => product.id === id);
  const [product,setProduct]=useState({});
  useEffect(() => {
    const getProduct = async ()=>{
     try {
       const {data}=await apiRequest.get(id);
       setProduct(data)
     } catch (error) {
       
     }
    }
    getProduct()
  }, [])

  return (
    <div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="images/cloth_1.jpg" alt="Image" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2 className="text-black">{product.name}</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores iusto! Molestiae expedita veritatis nesciunt doloremque sint asperiores fuga voluptas, distinctio, aperiam, ratione dolore.</p>
              <p className="mb-4">Ex numquam veritatis debitis minima quo error quam eos dolorum quidem perferendis. Quos repellat dignissimos minus, eveniet nam voluptatibus molestias omnis reiciendis perspiciatis illum hic magni iste, velit aperiam quis.</p>
              <p><strong className="text-primary h4">$50.00</strong></p>
              <div className="mb-1 d-flex">
                <label htmlFor="option-sm" className="d-flex mr-3 mb-3">
                  <span className="d-inline-block mr-2" style={{ top: '-2px', position: 'relative' }}><input type="radio" id="option-sm" name="shop-sizes" /></span> <span className="d-inline-block text-black">Small</span>
                </label>
                <label htmlFor="option-md" className="d-flex mr-3 mb-3">
                  <span className="d-inline-block mr-2" style={{ top: '-2px', position: 'relative' }}><input type="radio" id="option-md" name="shop-sizes" /></span> <span className="d-inline-block text-black">Medium</span>
                </label>
                <label htmlFor="option-lg" className="d-flex mr-3 mb-3">
                  <span className="d-inline-block mr-2" style={{ top: '-2px', position: 'relative' }}><input type="radio" id="option-lg" name="shop-sizes" /></span> <span className="d-inline-block text-black">Large</span>
                </label>
                <label htmlFor="option-xl" className="d-flex mr-3 mb-3">
                  <span className="d-inline-block mr-2" style={{ top: '-2px', position: 'relative' }}><input type="radio" id="option-xl" name="shop-sizes" /></span> <span className="d-inline-block text-black"> Extra Large</span>
                </label>
              </div>
              <div className="mb-5">
                <div className="input-group mb-3" style={{ maxWidth: '120px' }}>
                  <div className="input-group-prepend">
                    <button className="btn btn-outline-primary js-btn-minus" type="button">−</button>
                  </div>
                  <input type="text" className="form-control text-center" defaultValue={1} placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" />
                  <div className="input-group-append">
                    <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
                  </div>
                </div>
              </div>
              <p><a href="cart.html" className="buy-now btn btn-sm btn-primary">Add To Cart</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
ProductDetail.propTypes = {

}

export default ProductDetail
