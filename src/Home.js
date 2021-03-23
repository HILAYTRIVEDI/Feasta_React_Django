import React from 'react';
import images from './CorousalImages';
import Slider from 'react-slick';


function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };
    return (
      <div>
      <Slider {...settings} className=" slides-container">
        <div><img src={require("./images/slider-01.jpg").default} alt="Slider Image"/></div>
        <div><img src={require("./images/slider-02.jpg").default} alt="Slider Image"/></div>
        <div><img src={require("./images/slider-03.jpg").default} alt="Slider Image"/></div>
      </Slider>
     
      {/* Start About */}
      <div className="about-section-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <div className="inner-column">
                <h1>Welcome To <span>Live Dinner Restaurant</span></h1>
                <h4>Little Story</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante sodales augue, eget lacinia lectus erat et sem. </p>
                <p>Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem, a pellentesque tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar.</p>
                <a className="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img src={require("./images/about-img.jpg").default} alt className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      {/* End About */}
      {/* Start QT */}
      <div className="qt-box qt-background">
        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto text-center">
              <p className="lead ">
                " If you're not the one cooking, stay out of the way and compliment the chef. "
              </p>
              <span className="lead">Michael Strahan</span>
            </div>
          </div>
        </div>
      </div>
      {/* End QT */}
      {/* Start Menu */}
      <div className="menu-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title text-center">
                <h2>Special Menu</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
              </div>
            </div>
          </div>
          <div className="row inner-menu-box">
            <div className="col-3">
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">All</a>
                <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Drinks</a>
                <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Lunch{/*</a*/}
                </a><a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Dinner</a>
              </div>
            </div>
            <div className="col-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 special-grid drinks">
                      <div className="gallery-single fix">
                        <img src={require("./images/img-01.jpg").default} className="img-fluid" alt="Image" />
                        <div className="why-text">
                          <h4>Special Drinks 1</h4>
                          <p>Sed id magna vitae eros sagittis euismod.</p>
                          <h5> $7.79</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 special-grid drinks">
                      <div className="gallery-single fix">
                        <img src={require("./images/img-02.jpg").default} className="img-fluid" alt="Image" />
                        <div className="why-text">
                          <h4>Special Drinks 2</h4>
                          <p>Sed id magna vitae eros sagittis euismod.</p>
                          <h5> $9.79</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 special-grid drinks">
                      <div className="gallery-single fix">
                        <img src={require("./images/img-03.jpg").default} className="img-fluid" alt="Image" />
                        <div className="why-text">
                          <h4>Special Drinks 3</h4>
                          <p>Sed id magna vitae eros sagittis euismod.</p>
                          <h5> $10.79</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 special-grid lunch">
                      <div className="gallery-single fix">
                        <img src={require("./images/img-04.jpg").default} className="img-fluid" alt="Image" />
                        <div className="why-text">
                          <h4>Special Lunch 1</h4>
                          <p>Sed id magna vitae eros sagittis euismod.</p>
                          <h5> $15.79</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 special-grid lunch">
                      <div className="gallery-single fix">
                        <img src={require("./images/img-05.jpg").default} className="img-fluid" alt="Image" />
                        <div className="why-text">
                          <h4>Special Lunch 2</h4>
                          <p>Sed id magna vitae eros sagittis euismod.</p>
                          <h5> $18.79</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 special-grid lunch">
                      <div className="gallery-single fix">
                        <img src={require("./images/img-06.jpg").default} className="img-fluid" alt="Image" />
                        <div className="why-text">
                          <h4>Special Lunch 3</h4>
                          <p>Sed id magna vitae eros sagittis euismod.</p>
                          <h5> $20.79</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 special-grid dinner">
                      <div className="gallery-single fix">
                        <img src={require("./images/img-07.jpg").default} className="img-fluid" alt="Image" />
                        <div className="why-text">
                          <h4>Special Dinner 1</h4>
                          <p>Sed id magna vitae eros sagittis euismod.</p>
                          <h5> $25.79</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 special-grid dinner">
                      <div className="gallery-single fix">
                        <img src={require("./images/img-08.jpg").default} className="img-fluid" alt="Image" />
                        <div className="why-text">
                          <h4>Special Dinner 2</h4>
                          <p>Sed id magna vitae eros sagittis euismod.</p>
                          <h5> $22.79</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 special-grid dinner">
                      <div className="gallery-single fix">
                        <img src={require("./images/img-09.jpg").default} className="img-fluid" alt="Image" />
                        <div className="why-text">
                          <h4>Special Dinner 3</h4>
                          <p>Sed id magna vitae eros sagittis euismod.</p>
                          <h5> $24.79</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Menu */}
      {/* Start Gallery */}
      <div className="gallery-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title text-center">
                <h2>Gallery</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
              </div>
            </div>
          </div>
          <div className="tz-gallery">
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-4">
                <a className="lightbox" href="images/gallery-img-01.jpg">
                  <img className="img-fluid" src={require("./images/gallery-img-01.jpg").default} alt="Gallery Images" />
                </a>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <a className="lightbox" href="images/gallery-img-02.jpg">
                  <img className="img-fluid" src={require("./images/gallery-img-02.jpg").default} alt="Gallery Images" />
                </a>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <a className="lightbox" href="images/gallery-img-03.jpg">
                  <img className="img-fluid" src={require("./images/gallery-img-03.jpg").default} alt="Gallery Images" />
                </a>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <a className="lightbox" href="images/gallery-img-04.jpg">
                  <img className="img-fluid" src={require("./images/gallery-img-04.jpg").default} alt="Gallery Images" />
                </a>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <a className="lightbox" href="images/gallery-img-05.jpg">
                  <img className="img-fluid" src={require("./images/gallery-img-05.jpg").default} alt="Gallery Images" />
                </a>
              </div> 
              <div className="col-sm-6 col-md-4 col-lg-4">
                <a className="lightbox" href="images/gallery-img-06.jpg">
                  <img className="img-fluid" src={require("./images/gallery-img-06.jpg").default} alt="Gallery Images" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Gallery */}
     
      
      <a href="#" id="back-to-top" title="Back to top" style={{"color":"white"}}>^</a>
    </div>
    
    )
}

export default Home
