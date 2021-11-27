import React from 'react';

const Footer = () => {
    return (
        <>
        <div className="bg-dark mt-5">
        <div id="footer" className="text-white d-flex align-items-center justify-content-center">
          <div className="row  container p-3  ">
            <div className="col-md-6 p-2">
            
                <h3 className="my-3"><strong className="brand-name"> <i class="fas fa-clock"></i>  E-watch Fashion</strong></h3>
                <p className="componentOne"><strong>A LITTLE SOMETHING ABOUT US </strong><br />
                We provide the world best brand and new collection watch. We provied the best service in the word.keep touch with us. Buy wathch and makes your parsonality awesome E-watch.com </p>
                    <h5>Follow Us</h5>
                    <div id="icon-style">
                    <i className="fab fa-facebook-square mx-2"></i> 
                    <i className="fab fa-twitter mx-2"></i>
                    <i className="fab fa-instagram mx-2"></i>
                    <i className="fab fa-invision mx-2"></i>
                    </div>
            </div>
            <div className="col-md-6 p-2" id="contruct-icon">
               <h3 className="my-3">Contruct Us</h3>
               <p><i className="fas fa-map-marker-alt mx-2"></i>250/A Oval Street,london</p>
               <p><i className="fas fa-envelope mx-2"></i>support@example.com</p>
               <p><i className="fas fa-phone mx-2"></i>+98 12345 67890</p>
               <p>Feel free to contruct us</p>
            </div>
            
            
          </div>
        </div>
        <div className="text-center text-white p-2"><strong className="mx-3" >All The Copyright ©  E-watch Fashion</strong> || project done by MD RASED HASAN  </div>
        
        
                </div>
               </>
    );
};

export default Footer;