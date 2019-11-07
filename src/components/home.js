import React from "react";
import "../style/wave.css"

function Home() {
  return (
    <React.Fragment>
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
          <div className="circle-container col-lg-4">
            {/* {% include icons/placeholder.svg width="140" height="140" background="#777" color="#777" class="rounded-circle" %} */}
            <img
              src="../pics/community.png"
              alt="..."
            ></img>
            <p>
              Donec sed odio dui. Etiam porta sem malesuada magna mollis
              euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna.
            </p>
          
          </div>
          <div className="circle-container col-lg-4">
            {/* {% include icons/placeholder.svg width="140" height="140" background="#777" color="#777" class="rounded-circle" %} */}
            <img src="../pics/nonprofit.png" alt="..."/>
            <p>
              "My Counslr gave me Hope I've always dreamt about attending a university  but I knew that was not a realistic goal due to my finacial situtation. But when I heard about Counslr that all changed thanks to my sponser"
            </p>
          </div>
          <div className="circle-container col-lg-4">
            {/* {% include icons/placeholder.svg width="140" height="140" background="#777" color="#777" class="rounded-circle" %} */}
            <img
              src="../pics/education.png"
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
            <h5 class="card-title">Counslr Stories</h5>
            <h6>Meet Ashton</h6>
                <p>
                    "My Counslr gave me Hope I've always dreamt about attending a university  but I knew that was not a realistic goal due to my finacial situtation. But when I heard about Counslr that all changed thanks to my sponser"
                </p>
                <p>
                    Ashton raised $6K to help buy books and pay college tution by the help of his sponser.
                </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <div class="carousel-item">
        <div class="row no-gutters">
        <div class="col-md-4">
        <img src="https://media.istockphoto.com/photos/portrait-of-smiling-teen-boy-outdoors-picture-id589098830?k=6&m=589098830&s=612x612&w=0&h=Ut2FNWjS9CxXG5DdDduLqOEhcV0RBzRvsLrh9qS5EaY=" type="pics/png" alt="..." class="card-img" />
        </div>
        <div class="col-md-4">
        <div class="card-body">
            <h5 class="card-title story">Counslr Stories</h5>
            <h6>Meet Ava and Cory</h6>
            <p>
                    "My life completley turned around because of Corey. It gave me a purpise to help my community and change someones life forever."
                </p>
                <p>
                Ava sponsered Corey by donating $10K. Corey was able to attend college.
                </p>
        </div>
        </div>
    </div>
        </div>
        <div class="carousel-item">
        <div class="row no-gutters">
        <div class="col-md-4">
        <img src="https://media.istockphoto.com/photos/portrait-of-smiling-teen-boy-outdoors-picture-id589098830?k=6&m=589098830&s=612x612&w=0&h=Ut2FNWjS9CxXG5DdDduLqOEhcV0RBzRvsLrh9qS5EaY=" type="pics/png" alt="..." class="card-img" />
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">Counslr Stories</h5>
            <h6>Meet Yamilith</h6>
            <p>
                    "I thought about the time when I wanted to attend college but couldnt because I could not afford it nor have the right resources to guide me to the right direction. That is when I opended my eyes. Wouldnt it be great for me to give someone hope and opportunity they deserve."
                </p>
                <p>
                Yamilith sponsered 3 students helping them attend college by donating $15k.
                </p>
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
            <hr className="featurette-divider"/>

            <div className="row featurette">
            <div className="col-md-12">
                <div class="row">
                    <div class="col-md-8 featurette-section-one">
                        <h2 className="featurette-heading about">About Counslr</h2>
                        <p className="about1">
                        There’s a part of every one of us that dreams of a perfect world. That sparks an inspiration to help one another, to raise awareness, or even change our community. At Counslr, we believe your hopes and dreams should be shared with everyone that way change can happen.
                        </p>
                        <p className="about1">That is why we pride ourself by making it easy to inspire and affect thousands of lifes.By giving people the neccessary tools they need to capture and share their story, we have built a community where we are able to make dreams happen by working together. By Changing a life one by one.
                        </p>
                    </div>
                    <div class="col-md-4 featurette-section-two">
                        <img src="../pics/logo.png" alt="..."/>
                    </div>
                </div>
            </div>
            <div className="col-md-5 order-md-1">
            </div>
            </div>

            <hr className="featurette-divider"></hr>
        </div>
    </React.Fragment>
  );
}
export default Home;