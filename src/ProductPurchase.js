import React from 'react';

import caret from './images/caret.png';
import minus from './images/minus.png';
import plus from './images/plus.png';

import './styles/product.scss';

export const ProductPurchase = ({ price }) =>
  <section>
    <div className="productPurchase">
    <div className="productQuantity">
      Quantity <img src={minus} alt="Decrease Quantity"/> 1 <img src={plus} alt="Increase Quantity"/>
    </div>
    <div className="productFrequency">
      One Time Purchase  <img src={caret} alt="Select Frequency"/>
    </div>
    </div>
    <div>{price}</div>
    <button name="AddToBag">Add To Bag</button>
  </section>