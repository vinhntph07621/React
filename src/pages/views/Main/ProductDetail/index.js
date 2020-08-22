import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom';
import apiRequest from './../../../../api/productApi'

const ProductDetail = ({ products }) => {
  let { id } = useParams();
  // const product = products.find(product => product.id === id);
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await apiRequest.get(id);
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
              <img src={product.image} alt="Image" className="img-fluid" style={{ width: '500px' }}/>
            </div>
            <div className="col-md-6">
              <h2 className="text-black">{product.name}</h2>
              <p>{product.desc}</p>
              <p><strong className="text-primary h4">${product.price}</strong></p>
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
              <p><Link to="/cart" className="buy-now btn btn-sm btn-primary">Add To Cart</Link></p>
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
