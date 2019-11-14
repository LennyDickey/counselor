import React from "react";
import "../style/footer.scss"

function Footer() {
  return (
    <div>
      <footer className="page-footer font-small cyan darken-3">

        <div className="container">

          <div className="row">

            <div className="sm-links col-md-12">
              <div className="sm-links-container flex-center">
                <a className="social-media-link" href="https://www.facebook.com/" target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
                <a className="social-media-link" href="https://twitter.com/" target="_blank">
                  <i className="fa fa-twitter"></i>
                </a>
                <a className="social-media-link" href="https://dribbble.com/" target="_blank">
                  <i className="fa fa-dribbble"></i>
                </a>
                <a className="social-media-link" href="https://www.linkedin.com/" target="_blank">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>

          </div>

        </div>

        <div class="footer-copyright text-center py-3">© 2020 All Rights Reserved by:
          <a href="#" className="copyright-name"> Team Charlotte</a>
        </div>

      </footer>
    </div>
    




    // <footer className="site-footer footer">
    //   {/* <div className="container"></div> */}
    //   <div className="container footer-container">
    //     <div className="row">
    //       <div className="col-md-8 col-sm-6 col-xs-12">
    //         <p className="copyright-text">
    //           Copyright &copy; 2020 All Rights Reserved by
    //           <a href="#"> TeamCharlotte</a>.
    //         </p>
    //       </div>

    //       <div className="sm-container col-md-4 col-sm-6 col-xs-12">
    //         <ul className="social-icons">
    //           <li className="sm-list-item">
    //             <a className="sm-link facebook" href="#">
    //               <i className="fa fa-facebook"></i>
    //             </a>
    //           </li>
    //           <li className="sm-list-item">
    //             <a className="sm-link twitter" href="#">
    //               <i className="fa fa-twitter"></i>
    //             </a>
    //           </li>
    //           <li className="sm-list-item">
    //             <a className="sm-link dribbble" href="#">
    //               <i className="fa fa-dribbble"></i>
    //             </a>
    //           </li>
    //           <li className="sm-list-item">
    //             <a className="sm-link linkedin" href="#">
    //               <i className="fa fa-linkedin"></i>
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
}
export default Footer;
