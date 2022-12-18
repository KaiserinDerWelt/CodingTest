import React from 'react';
import { ProductImage } from './ProductImage';

import './styles/product.scss';

export const ProductGrid = ({ heading, cta1, p1Name, p1Img, p1Price, p2Name, p2Img, p2Price, p3Name, p3Img, p3Price, p4Name, p4Img, p4Price }) =>
  <section className="productGrid">
    <h2 className="productSuggestion">{heading}</h2>
    <div className="desktopArragement">
      <div className="retailWrapper">
        <div className="productBackground">
          <ProductImage image={p1Img} />
        </div>
        <div className="productRetailDetails">
          <h1>{p1Name}</h1>
          <h4>{p1Price}</h4>
        </div>
        <div className="Cta">
          <button className="shopNow">{cta1}</button>
        </div>
      </div>
      <div className="retailWrapper">
        <div className="productBackground">
          <ProductImage image={p2Img} />
        </div>
        <div className="productRetailDetails">
          <h1>{p2Name}</h1>
          <h4>{p2Price}</h4>
        </div>
        <div className="Cta">
          <button className="shopNow">{cta1}</button>
        </div>
      </div>
      <div className="retailWrapper">
        <div className="productBackground">
          <ProductImage image={p3Img} />
        </div>
        <div className="productRetailDetails">
          <h1>{p3Name}</h1>
          <h4>{p3Price}</h4>
        </div>
        <div className="Cta">
          <button className="shopNow">{cta1}</button>
        </div>
      </div>
      <div className="retailWrapper">
        <div className="productBackground">
          <ProductImage image={p4Img} />
        </div>
        <div className="productRetailDetails">
          <h1>{p4Name}</h1>
          <h4>{p4Price}</h4>
        </div>
        <div className="Cta">
          <button className="shopNow">{cta1}</button>
        </div>
      </div>
    </div>
  </section>
