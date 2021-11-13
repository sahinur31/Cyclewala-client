import React, { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
import Rating from "react-rating";
const ClientReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://calm-refuge-73180.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="client-review py-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title mb-5 py-3">
              <Zoom>
                <h2 className="theme-color">Our Client Review</h2>
                <p>Our Client Review is here. You can see best review.</p>
              </Zoom>
            </div>
          </div>
        </div>

        <div className="row">
          {reviews?.map((pd) => (
            <div key={pd._id} className="col-md-4">
              <div className="cart">
                <div className="cart-details">
                  <img className="w-25 mb-3" src={pd.img} alt="" />
                </div>
                <div className="text-area">
                  <h5>{pd.name}</h5>
                  <p className="font-weight-bold">{pd.companyDesig}</p>
                  <p>{pd.description}</p>
                  <p>
                    <Rating
                      initialRating={pd.rating}
                      emptySymbol="far fa-star theme-color"
                      fullSymbol="fas fa-star theme-color"
                      readonly
                    ></Rating>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
