import React from "react";
import Zoom from "react-reveal/Zoom";
import left from "../../../images/upcoming.jpg";

const ClientHandle = () => {
  return (
    <div className="client-review py-5" style={{backgroundColor: '#f9edde'}}>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6">
            <img className="img-fluid" src={left} alt="" />
          </div>
          <div className="col-md-6 ">
            <h3 className=" mb-4">
              Upcoming <span className="theme-color">Product</span>
            </h3>
            <h5 className="theme-color mb-4">Folding Bike</h5>
            <p style={{lineHeight:'35px',color: 'rgb(150, 141, 141)'}}>
              Remember the freedom, fun, and sense of accomplishment that your
              first bike gave you? Well, these days, kids can get rolling at an
              even earlier age with toddler-friendly walk bikes and
              coaster-brake-equipped 20-inch models that are ideal for
              neighborhood adventures. Even better, the fun of our kids bikes is
              equally matched with the quality and value that parents appreciate
            </p>
            <button className="btn theme-bg text-white px-4 mt-3">See Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientHandle;
