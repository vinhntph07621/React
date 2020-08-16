import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const Header = ({categories}) => {
    return (
        <header className="site-navbar" role="banner">
        <div className="site-navbar-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                <form action className="site-block-top-search">
                  <span className="icon icon-search2" />
                  <input type="text" className="form-control border-0" placeholder="Search" />
                </form>
              </div>
              <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                <div className="site-logo">
                  <a href="index.html" className="js-logo-clone">Shoppers</a>
                </div>
              </div>
              <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                <div className="site-top-icons">
                  <ul>
                    <li><a href="#"><span className="icon icon-person" /></a></li>
                    <li><a href="#"><span className="icon icon-heart-o" /></a></li>
                    <li>
                      <a href="cart.html" className="site-cart">
                        <span className="icon icon-shopping_cart" />
                        <span className="count">2</span>
                      </a>
                    </li> 
                    <li className="d-inline-block d-md-none ml-md-0"><a href="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu" /></a></li>
                  </ul>
                </div> 
              </div>
            </div>
          </div>
        </div> 
        <nav className="site-navigation text-right text-md-center" role="navigation">
          <div className="container">
            <ul className="site-menu js-clone-nav d-none d-md-block">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="has-children">
                <a href="about.html">Shop</a>
                <ul className="dropdown">
                  {categories.map((cate)=> (
                    <li><Link to={`/category/${cate.id}`}>{cate.name}</Link></li>
                  ))}
                </ul>
              </li>
              <li><Link to="about">About</Link></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
    )
}

Header.propTypes = {

}

export default Header
