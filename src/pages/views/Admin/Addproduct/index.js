import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form";
import firebase from './../../../../firebase'
import { useParams, useHistory } from 'react-router-dom';

const Addproduct = ({onAdd, categories}) => {
  const { register, handleSubmit, errors } = useForm();
  // const[valueInput, setValueInput]= useState({});
  // const onHandleChange=(e)=>{
  //   const { name, value } = e.target;
  //   setValueInput({
  //       ...valueInput,
  //         [name]:value
  //     });
  // }
  let history = useHistory();
  const [desc, setDesc] = useState("");
  const onHandleSubmit = (data) => {
    console.log(data)
    let file = data.image[0];
    // tạo folder chứa ảnh trên firesbase
    let storageRef = firebase.storage().ref(`images/${file.name}`);
    // đẩy ảnh lên đường dẫn trên
    let uploadTask = storageRef.put(file);
    // thực hiện việc đầy ảnh lên firebase
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED);

    // lấy ảnh từ Firebase
    firebase.storage().ref().child(`images/${file.name}`).getDownloadURL().then((url) => {
        // Tạo object mới chứa toàn bộ thông tin từ input
        const newData = {
            id: Math.random().toString(36).substr(2, 9),
            ...data,
            image: url
        }
        // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
        onAdd(newData)
        console.log(newData);
        history.push('/admin/products');
    })
    const handleEditorChange = (content, editor) => {
        setDesc(content);
    }
}

  // const onHandleSubmit =(e) =>{
  //     e.preventDefault();
  //     onAdd(valueInput)
  // }
    return (
      <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Add Product</h1>
      <div className="card shadow mb-4">
        <div className="card-body">
        <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="form-group">
          <label htmlFor="inputProductName">Tên sản phẩm</label>
          <input type="text" className="form-control" name="name" id="inputProductName" ref={register({required: true, minLength:5})} /> 
          {errors.name && errors.name.type === "required" &&<span>Không để trống</span>}  
          {errors.name && errors.name.type === "minLength" &&<span>Tên không dưới 5 ký tự</span>}        
        </div>       
        <div className="form-group">
          <label htmlFor="inputCategory"> Danh mục sản phẩm </label>
          <select id="inputCategory" name="cate_id" className="form-control" ref={register}>
            {categories.map((cate) => (
              <option value={cate.id}>{cate.name}</option>
            ))}
          </select>
        </div>   
        <div className="form-group">
          <label htmlFor="inputProductImage"> Ảnh </label>
          <input type="file" className="form-control" name="image" id="inputProductImage" ref={register({required: true})}/>       
        </div>   
        <div className="form-group">
          <label htmlFor="inputProductPrice">Giá</label>
          <input type="text" className="form-control" name="price" id="inputProductPrice" ref={register({required: true})} />       
        </div>      
        <div className="form-group">
          <label htmlFor="inputProducDescripton">Mô tả</label>
          <input type="text" className="form-control" name="desc" id="inputProducDescripton" ref={register({required: true})} />       
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </div>
      </div>
    </div>
    )
}

Addproduct.propTypes = {
  onAdd: PropTypes.func
}

export default Addproduct
