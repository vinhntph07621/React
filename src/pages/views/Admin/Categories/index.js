import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import apiCategory from './../../../../api/categoryApi';

const CategoriesManger = ({categories}) => {
    const removeHandle = async(id) => {
        const { data } = await apiCategory.remove(id);
        const newCategory = categories.filter(category => category.id !== data.id);
    }
    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more
          information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official
            DataTables documentation</a>.</p>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <button className="btn"><Link to="category/add">Thêm danh mục</Link></button>

                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Tên danh mục</th>
                                    <th scope="col">Mô tả</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category, index)=> (
                                <tr key={index}>
                                    <td>{index +1}</td>
                                    <td>{category.name}</td>
                                    <td>{category.desc}</td>
                                    <td>
                                            <Link className="btn btn-primary" to={`/admin/category/${category.id}`}>Sửa</Link>
                                            <button className="btn btn-danger" onClick={() => removeHandle(category.id)}>Xóa</button>
                                        </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

CategoriesManger.propTypes = {

}

export default CategoriesManger
