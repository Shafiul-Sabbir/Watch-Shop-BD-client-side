import React from 'react';
// import imge from '../../images/icon/logo-wide.png'

const Footer = () => {
    return ( 
            <div className=" mt-5 w-100">
                <div className="jumbotron bg-dark text-white " >
                    <div className="row">
                        <div className="col-sm-4">
                            <br />
                            <h5 className="fw-bolder">Watch Shop Bd</h5>
                            {/* <img src={imge} alt="" /> */}
                            <p className="p-2">
                        Kamperen is equipped with everythig required for an amazing campground business website. Set up camp now.
                            </p>

                          <h4>Get Social</h4>
<div>
    <i className="fab fa-facebook-square m-2" style={{fontSize:'20px'}}></i>

                         <i className="fab fa-instagram m-2" style={{fontSize:'20px'}}></i>
                         <i className="fab fa-twitter-square m-2" style={{fontSize:'20px'}}></i>
                         <i className="fab fa-whatsapp m-2"  style={{fontSize:'20px'}}></i>
</div>
                        </div>
                        {/* <div className="col-sm-4">
                            <ul>
                                <ol className="text-warning">Link</ol>
                                <ol >Home</ol>
                                <ol>About</ol>
                                <ol>Service</ol>
                               
                                <ol>Contact</ol>
                            </ul>
                        </div> */}
                        <div className="col-sm-8">
                          
                           <p>
                               <i className="fas fa-map-marked-alt " ></i>
                               
                               <br />
                                730/C, NG- 11, Shahid Baki Sarak,<br />
                                 Khilgoan, Opposite of Sonali Bank,<br />
                                  Beside Walton Showroom. Dhaka -1219, Bangladesh.</p>
                           <h5>Contuct us</h5>
                          <h4> <i className="fas fa-phone-volume"></i> 
                          +00-89-67-56-67
                         </h4>
                         <br />
                         
                        </div>
                    </div>  
                    <hr/>
                    <p>© Copyright Watch Shop Bd . All Rights Reserved </p>            
                </div> 
                
            </div>
       
    );
};

export default Footer;