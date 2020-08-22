import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import apiRequest from './../../../../api/productApi';
import { useForm } from "react-hook-form"

const EditProduct = ({ products, categories }) => {
    let { id } = useParams();
    let history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
    const product = products.find(product => product.id === id);

    const [currentProduct, setCurrentProduct] = useState(product);

    const onHandleSubmit = async (product) => {
        const { data } = await apiRequest.update(id, product)
        console.log(data)
        const newdata = {
            id,
            ...data,
        }
        setCurrentProduct(newdata)
        console.log(currentProduct)
        history.push('/admin/products');
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-50">
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input type="text" name="name" defaultValue={currentProduct.name} ref={register} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Giá sản phẩm</label>
                    <input type="text" name="price" defaultValue={currentProduct.price} ref={register} className="form-control" />
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Danh mục</label>
                    <select class="form-control" name="categoryId" ref={register} id="">
                        {categories.map(cate =>
                            <option value={cate.id}>{cate.name}</option>
                        )}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="productDesc">Mô tả sản phẩm</label>
                    <input type="text" name="desc" defaultValue={currentProduct.desc} ref={register} className="form-control" />
                </div>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

EditProduct.propTypes = {
    products: PropTypes.array
}

export default EditProduct