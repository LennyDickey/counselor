import React from "react";
import "../style/wave.css"

function Profile() {
  return (
    <>
      <header>
        <div className="overlay"></div>
        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src="../video/vid.mp4" type="video/mp4"></source>
        </video>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-3 title">Counslr</h1>
              <p className="lead mb-0 yay">Guidence and Hope you need</p>
            </div>
          </div>
        </div>
      </header>
      <div>
        <div className="row">
          <div className="col-lg-4">
            {/* {% include icons/placeholder.svg width="140" height="140" background="#777" color="#777" class="rounded-circle" %} */}
            <img
              src="../pics/community.png" type="pics/png"
              alt="..."
            ></img>
            <p>
              Donec sed odio dui. Etiam porta sem malesuada magna mollis
              euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna.
            </p>
          
          </div>
          <div className="col-lg-4">
            {/* {% include icons/placeholder.svg width="140" height="140" background="#777" color="#777" class="rounded-circle" %} */}
            <img
              src="../pics/nonprofit.png" type="pics/png"
              alt="..."
            ></img>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
              amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor
              mauris condimentum nibh.
            </p>
          
          </div>
          <div className="col-lg-4">
            {/* {% include icons/placeholder.svg width="140" height="140" background="#777" color="#777" class="rounded-circle" %} */}
            <img
              src="../pics/education.png" type="pics/png"
              alt="..."
            ></img>
            <p>
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
          </div>
        </div>
        
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="card mb-3">
    <div class="row no-gutters">
    <div class="col-md-4">
      <img src="https://media.istockphoto.com/photos/portrait-of-smiling-teen-boy-outdoors-picture-id589098830?k=6&m=589098830&s=612x612&w=0&h=Ut2FNWjS9CxXG5DdDduLqOEhcV0RBzRvsLrh9qS5EaY=" class="card-img" alt="..."></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="carousel-item">
    <div class="row no-gutters">
    <div class="col-md-4">
    <img
              src="https://i.cbc.ca/1.5035760.1551290606!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_780/tate-ovbiagbonhia.JPG" type="pics/png"
              alt="..."
            ></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
    </div>
    <div class="carousel-item">
    <div class="row no-gutters">
    <div class="col-md-4">
    <img
              src="../pics/ra.png" type="pics/png"
              alt="..."
            ></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        <hr className="featurette-divider"></hr>

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
             About Counslr
            </h2>
            <p>
            There’s a part of every one of us that dreams of a perfect world. That sparks an inspiration to help one another, to raise awareness, or even change our community. At Counslr, we believe your hopes and dreams should be shared with everyone that way change can happen.
            </p>
            <p>That is why we pride ourself by making it easy to inspire and affect thousands of lifes.By giving people the neccessary tools they need to capture and share their story, we have built a community where we are able to make dreams happen by working together. By Changing a life one by one.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              src="../pics/logo.png" type="pics/png"
              alt="..."
            ></img>

            {/* {% include icons/placeholder.svg width="500" height="500" background="#eee" color="#aaa" class="bd-placeholder-img-lg featurette-image img-fluid mx-auto" %} */}
          </div>
        </div>

        <hr className="featurette-divider"></hr>
      </div>
    </>
  );
}
export default Profile;
