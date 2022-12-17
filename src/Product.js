import React from 'react';
import { ProductDesc } from './ProductDesc';
import { ProductImage } from './ProductImage';
import { ProductPurchase } from './ProductPurchase';
import { ProductGrid } from './ProductGrid';

import './styles/product.scss';
import './styles/mediaqueries.scss';

export const Product = ({
  productData: {
    imgURL,
    category,
    name,
    description,
    ratingURL,
    features,
    shade,
    price,
    crossSell,
  },
}) => (
  <main>
    <div className="productShowCaseWrapper">
    <h4 className="category">{category}</h4>
    <div className="productImageContainer">
      <ProductImage className="productImage" image={imgURL} />
    </div>
    <div className="productDescriptionContainer">
      <ProductDesc
        category={category}
        name={name}
        description={description}
        rating={ratingURL}
        features={features}
        shade={shade}
      />
      <hr className="dividerProductDescription"/>
      <ProductPurchase price={price} />
    </div>
    </div>
    <hr />
    <div>
      <ProductGrid
        heading={crossSell.heading}
        cta1={crossSell.cta1}
        p1Name={crossSell.product1.name}
        p1Img={crossSell.product1.imgURL}
        p1Price={crossSell.product1.price}
        p2Name={crossSell.product2.name}
        p2Img={crossSell.product2.imgURL}
        p2Price={crossSell.product2.price}
        p3Name={crossSell.product3.name}
        p3Img={crossSell.product3.imgURL}
        p3Price={crossSell.product3.price}
        p4Name={crossSell.product4.name}
        p4Img={crossSell.product4.imgURL}
        p4Price={crossSell.product4.price}
      />
    </div>
  </main>
);
