import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form";
import apiCategory from './../../../../api/categoryApi';
import { useParams, useHistory } from 'react-router-dom';

const AddCategory = ({onAddCate, categories}) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();
    const onHandleSubmit = (data) =>{
        console.log(data)
        const newData = {
            id: Math.random().toString(36).substr(2, 9),
            ...data,
        }
        console.log(newData)
        onAddCate(newData)
        history.push('/admin/categories');
    }
    return (
        <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Add Category</h1>
      <div className="card shadow mb-4">
        <div className="card-body">
        <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="form-group">
          <label htmlFor="inputCategoryName">Tên danh mục</label>
          <input type="text" className="form-control" name="name" id="inputCategoryName" ref={register({required: true, minLength:3})} /> 
          {errors.name && errors.name.type === "required" &&<span>Không để trống</span>}  
          {errors.name && errors.name.type === "minLength" &&<span>Tên không dưới 5 ký tự</span>}        
        </div>    
        <div className="form-group">
          <label htmlFor="inputCategoryDesc">Mô tả</label>
          <input type="text" className="form-control" name="desc" id="inputCategoryDesc" ref={register({required: true})} />       
        </div>      

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </div>
      </div>
    </div>
    )
}

AddCategory.propTypes = {

}

export default AddCategory
