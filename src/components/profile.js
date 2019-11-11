import React from "react";
import "../Blog.scss";
function Profile() {
  return (
    <>
      <header>
        {" "}
        <h2>Anell's College Fund</h2>
        <p>17 year old going to Harvard !</p>
      </header>
      <div class="row">
        <div class="col-6">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/mPHpnJu8zc8"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="col-6">
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped bg-danger progress-bar-animated"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div>
            <h2>$750</h2>
            <p>pledged of $20,823 goal</p>
          </div>
          <div>
            <h2>7</h2>
            <p>backers</p>
          </div>
          <div>
            <h2>35</h2>
            <p>days to go</p>
          </div>
          <div className="herobtn">
            <button
              type="button"
              class="btn btn-outline-danger btn-lg btn-block"
            >
              Donate
            </button>
            <button type="button" class="btn btn-outline-danger btn-lg right">
              Follow
            </button>
          </div>
        </div>
      </div>
      <hr className="featurette-divider"></hr>
      <div class="container">
        <div class="row">
          <div class="col-8">
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  class="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  ari
                  a-controls="nav-home"
                  aria-selected="true"
                >
                  About
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Blog
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#nav-contact"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Contact
                </a>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dignissim, tortor at efficitur aliquam, felis dolor elementum
                lacus, molestie ultricies neque est at purus. Nulla facilisi.
                Nunc ultricies accumsan quam, ac suscipit justo. Etiam lobortis
                suscipit viverra. Phasellus accumsan id lacus vel scelerisque.
                Aliquam sed rutrum velit, id fringilla felis. Ut blandit iaculis
                orci ac dignissim. Integer vitae ipsum tortor. Integer sagittis
                non justo nec molestie. Vivamus malesuada, dolor non eleifend
                venenatis, purus metus placerat ex, et molestie enim nibh vel
                dui. Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Nulla vitae neque lorem.
                Phasellus malesuada justo eros, nec pretium massa dapibus at.
              </div>
              <div
                class="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div class="blog-card">
                  <div class="meta">
                    <div class="photo"></div>
                    <ul class="details">
                      <li class="author">
                        <a href="#">John Doe</a>
                      </li>
                      <li class="date">Aug. 24, 2015</li>
                      <li class="tags">
                        <ul>
                          <li>
                            <a href="#">Learn</a>
                          </li>
                          <li>
                            <a href="#">Code</a>
                          </li>
                          <li>
                            <a href="#">HTML</a>
                          </li>
                          <li>
                            <a href="#">CSS</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div class="description">
                    <h1>Learning to Code</h1>
                    <h2>Opening a door to the future</h2>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad eum dolorum architecto obcaecati enim dicta
                      praesentium, quam nobis! Neque ad aliquam facilis numquam.
                      Veritatis, sit.
                    </p>
                    <p class="read-more">
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
                <div class="blog-card alt">
                  <div class="meta">
                    <div class="photo"></div>
                    <ul class="details">
                      <li class="author">
                        <a href="#">Jane Doe</a>
                      </li>
                      <li class="date">July. 15, 2015</li>
                      <li class="tags">
                        <ul>
                          <li>
                            <a href="#">Learn</a>
                          </li>
                          <li>
                            <a href="#">Code</a>
                          </li>
                          <li>
                            <a href="#">JavaScript</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div class="description">
                    <h1>First Day of Class</h1>
                    <h2>Excited for college!</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad eum dolorum architecto obcaecati enim dicta
                      praesentium, quam nobis! Neque ad aliquam facilis numquam.
                      Veritatis, sit.
                    </p>
                    <p class="read-more">
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dignissim, tortor at efficitur aliquam, felis dolor elementum
                lacus, molestie ultricies neque est at purus. Nulla facilisi.
                Nunc ultricies accumsan quam, ac suscipit justo. Etiam lobortis
                suscipit viverra. Phasellus accumsan id lacus vel scelerisque.
                Aliquam sed rutrum velit, id fringilla felis. Ut blandit iaculis
                orci ac dignissim. Integer vitae ipsum tortor. Integer sagittis
                non justo nec molestie. Vivamus malesuada, dolor non eleifend
                venenatis, purus metus placerat ex, et molestie enim nibh vel
                dui. Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Nulla vitae neque lorem.
                Phasellus malesuada justo eros, nec pretium massa dapibus at.
              </div>
            </div>
            1 of 3 (Wider) <h2>Heading</h2>
            <p>
              Donec sed odio dui. Etiam porta sem malesuada magna mollis
              euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna.
            </p>
            <p>
              <a className="btn btn-secondary" href="#" role="button">
                View details &raquo;
              </a>
            </p>
          </div>
          <div class="col-4">
            2 of 3
            <div class="card">
              <img
                src="https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card">
              <img
                src="https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="featurette-divider"></hr>
    </>
  );
}
export default Profile;
