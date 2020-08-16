import React from 'react';
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'
import Navbar from '../../components/Main/NavBar'
import '../../assets/css/main/style.css'
import '../../assets/css/main/icomoon/style.css'

export default ({ children, categories }) => {

    console.log('render Main')
    console.log(categories)

    return (
        <div className="user-page">
            <div class="site-wrap">
            <Header categories={categories}/>
            <div className="content">
                {children}

            </div>
            <Footer />
            </div>
        </div>
    )
}
