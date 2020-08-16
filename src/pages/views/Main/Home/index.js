import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../../../../assets/images/hero_1.jpg'
import Women from '../../../../assets/images/women.jpg'
import Children from '../../../../assets/images/children.jpg'
import Men from '../../../../assets/images/men.jpg'
import Blog from '../../../../assets/images/blog_1.jpg'

const Home = ({products}) => {
    return (
        <div>
        <div className="site-blocks-cover" style={{backgroundImage: `url(${Banner})`}} data-aos="fade">
          <div className="container">
            <div className="row align-items-start align-items-md-center justify-content-end">
              <div className="col-md-5 text-center text-md-left pt-5 pt-md-0">
                <h1 className="mb-2">Finding Your Perfect Shoes</h1>
                <div className="intro-text text-center text-md-left">
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla. </p>
                  <p>
                    <a href="#" className="btn btn-sm btn-primary">Shop Now</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section site-section-sm site-blocks-1">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay>
                <div className="icon mr-4 align-self-start">
                  <span className="icon-truck" />
                </div>
                <div className="text">
                  <h2 className="text-uppercase">Free Shipping</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay={100}>
                <div className="icon mr-4 align-self-start">
                  <span className="icon-refresh2" />
                </div>
                <div className="text">
                  <h2 className="text-uppercase">Free Returns</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay={200}>
                <div className="icon mr-4 align-self-start">
                  <span className="icon-help" />
                </div>
                <div className="text">
                  <h2 className="text-uppercase">Customer Support</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section site-blocks-2">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay>
                <a className="block-2-item" href="#">
                  <figure className="image">
                    <img src={Women} alt="" className="img-fluid" />
                  </figure>
                  <div className="text">
                    <span className="text-uppercase">Collections</span>
                    <h3>Women</h3>
                  </div>
                </a>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay={100}>
                <a className="block-2-item" href="#">
                  <figure className="image">
                    <img src={Children} alt="" className="img-fluid" />
                  </figure>
                  <div className="text">
                    <span className="text-uppercase">Collections</span>
                    <h3>Children</h3>
                  </div>
                </a>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay={200}>
                <a className="block-2-item" href="#">
                  <figure className="image">
                    <img src={Men} alt="" className="img-fluid" />
                  </figure>
                  <div className="text">
                    <span className="text-uppercase">Collections</span>
                    <h3>Men</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section block-3 site-blocks-2 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 site-section-heading text-center pt-4">
                <h2>Featured Products</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="row">

                {products.map(({id, name, image, price }, index) => (
                  <div className="col-md-4 mb-4">
                    <div className="item">
                      <div className="block-4 text-center">
                        <figure className="block-4-image">
                          <img src={image} style={{height: '400px'}} alt="Image placeholder" className="img-fluid" />
                        </figure>
                        <div className="block-4-text p-2">
                          <h3 className="mb-2"><a href={`/product/${id}`}>{name}</a></h3>
                          <p className="text-primary font-weight-bold">${price}</p>
                          <div className="block-input">
                            <button className="btn btn-primary">Add to cart</button>
                        </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  ))}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section block-8">
          <div className="container">
            <div className="row justify-content-center  mb-5">
              <div className="col-md-7 site-section-heading text-center pt-4">
                <h2>Big Sale!</h2>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-7 mb-5">
                <a href="#"><img src={Blog} alt="Image placeholder" className="img-fluid rounded" /></a>
              </div>
              <div className="col-md-12 col-lg-5 text-center pl-md-5">
                <h2><a href="#">50% less in all items</a></h2>
                <p className="post-meta mb-4">By <a href="#">Carl Smith</a> <span className="block-8-sep">•</span> September 3, 2018</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
                <p><a href="#" className="btn btn-primary btn-sm">Shop Now</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

Home.propTypes = {

}

export default Home
