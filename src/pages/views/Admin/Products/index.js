import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const ProductsManager = ({ products, onRemove, categories }) => {
    const removeHandle = (id) => {
        onRemove(id)
        window.location.href = "/admin/products"
    }

    const getNameCate = (cate_id) => {
        return categories.map(category => category.id == cate_id ? category.name : '');
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
                <button className="btn"><Link to="product/add">Thêm sản phẩm</Link></button>

                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Tên</th>
                                    <th scope="col">Danh mục</th>
                                    <th scope="col">Ảnh</th>
                                    <th scope="col">Giá</th>
                                    <th scope="col">Mô tả</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(({ id, name, image, price, desc, cate_id }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{name}</td>
                                        <td>{getNameCate(cate_id)}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td>{price}</td>                                        
                                        <td>{desc}</td>
                                        <td>
                                            <Link className="btn btn-primary" to={`/admin/product/${id}`}>Sửa</Link>
                                            <button className="btn btn-danger" onClick={() => removeHandle(id)}>Xóa</button>
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

ProductsManager.propTypes = {

}

export default ProductsManager
