import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import ProductAdd from '../pages/views/Admin/Addproduct'
import EditProduct from '../pages/views/Admin/EditProduct'
import CategoriesManger from '../pages/views/Admin/Categories'
import CategoryAdd from '../pages/views/Admin/AddCategory'
import CategoryEdit from '../pages/views/Admin/EditCategory'



//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import ProductDetail from '../pages/views/Main/ProductDetail'
import ProductCate from '../pages/views/Main/ProductCate';


const Routers = ({ products, onRemove , onAdd, productDetail, onUpdate, categories, onAddCate, onUpdateCate}) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }

    const onHandleAdd = (products) => {
        onAdd(products)
    }

    const onHandleUpdate = (id, product) => {
        onUpdate(id, product)
    }
    
    const onHandleAddCate = (categories) => {
        onAddCate(categories)
    }

    const onHandleUpdateCate = (id, categories) => {
        onUpdateCate(id, categories)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products' >
                                <ProductsManager products={products} onRemove={onHandleRemove} categories={categories}/>
                            </Route>
                            <Route path='/admin/product/add'>
                                <ProductAdd onAdd={onHandleAdd} categories={categories}/>
                            </Route>
                            <Route path='/admin/product/:id'>
                                    <EditProduct products={products} onUpdate={onHandleUpdate} />
                            </Route>
                            <Route path='/admin/categories' >
                                <CategoriesManger categories={categories} onRemove={onHandleRemove} />
                            </Route>
                            <Route path='/admin/category/add'>
                                <CategoryAdd categories={categories} onAddCate={onHandleAddCate}/>
                            </Route>
                            <Route path='/admin/category/:id'>
                                <CategoryEdit categories={categories} onUpdateCate={onHandleUpdateCate}/>
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                
                <Route>
                    <LayoutMain categories={categories}>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products} />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/category/:cate_id">
                                <ProductCate categories={categories} products={products}/>
                            </Route>
                            <Route path="/product/:id">
                                <ProductDetail products={products}/>
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
