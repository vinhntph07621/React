import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import apiCategory from './../../../../api/categoryApi';

const EditCategory = ({categories, onUpdateCate}) => {
    const { register, handleSubmit, errors } = useForm();
    let { id } = useParams();
    let history = useHistory();
    const category = categories.find(category => category.id === id);
    const [currentCate, setCurrentCate] = useState(category);
    
    const onHandleSubmit = (e) => {
        e.preventDefault()
        onUpdateCate(currentCate);
        history.push('/admin/categories');
    }

    const onHandleChange = e => {
        const { name, value } = e.target;
        setCurrentCate({
            ...currentCate,
            [name]: value
        })
    }

    return (
        <div>
            <form action="" onSubmit={onHandleSubmit} className="w-50">
                <div className="form-group">
                    <label htmlFor="categoryName">Tên danh mục</label>
                    <input type="text" name="name" value={currentCate.name} onChange={onHandleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="categoryName">Mô tả</label>
                    <input type="text" name="desc" value={currentCate.desc} onChange={onHandleChange} className="form-control" />
                </div>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

EditCategory.propTypes = {
    products: PropTypes.array
}

export default EditCategory
