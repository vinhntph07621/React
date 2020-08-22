import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import apiCategory from './../../../../api/categoryApi';

const EditCategory = ({categories}) => {
    const { register, handleSubmit, errors } = useForm();
    let { id } = useParams();
    let history = useHistory();
    const category = categories.find(category => category.id === id);
    const [currentCate, setCurrentCate] = useState(category);
    
    const onHandleSubmit = async(category) => {
        const { data } = await apiCategory.update(id, category)
        console.log(data)
        const newdata = {
            id,
            ...data,
        }
        setCurrentCate(newdata)
        console.log(newdata)
        window.location.href = "/admin/categories"
    }

    

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-50">
                <div className="form-group">
                    <label htmlFor="categoryName">Tên danh mục</label>
                    <input type="text" name="name" defaultValue={currentCate.name} ref={register} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="categoryName">Mô tả</label>
                    <input type="text" name="desc" defaultValue={currentCate.desc} ref={register} className="form-control" />
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
