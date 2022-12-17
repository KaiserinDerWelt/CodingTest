import React from 'react';
import caret from './images/caret.svg';
import './styles/product.scss';

export const ProductDesc = ({ name, description, rating, features, shade }) => (
  <section>
    <h2 className="productName">{name}</h2>
    <p className='productDescription'>{description}</p>
    <figure>
      <img src={rating} className="productRating" alt="Product Rating" />
      <img src={caret}  className="allRatings"alt="View All Ratings" />
    </figure>
    <section className="feauturesContainer">
      <div className="featureDescription">
        <h4 className="feature">Benefits</h4>
        <p className="featureDetails">{features.benefits}</p>
      </div>
      <div className="featureDescription">
        <h4 className="feature">Finish</h4>
        <p className="featureDetails">{features.finish}</p>
      </div>
      <div className="featureDescription">
        <h4 className="feature">Coverage</h4>
        <p className="featureDetails">{features.coverage}</p>
      </div>
      <div className="featureDescription">
        <h4 className="feature">Key Ingredients</h4>
        <p className="featureDetails">
          {features.keyIngredients} <a href="http://www.clinique.com">More</a>
        </p>
      </div>
    </section>
    <section className="shadeContainer">
      <div className="shadeDescription">
        <div> <span className='shadeName'>{shade.name}</span></div>
     <div> <div className="shadeColor"></div></div>
      </div>
     
    </section>
  </section>
);
