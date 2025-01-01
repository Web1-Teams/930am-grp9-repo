
import React from 'react';
import './product.css';

const product = () => {
    <div classNameName="product-section">

    <div classNameName="product-card">

        <img className="img" src="./1 image.png" alt="omega-3" width="300px" height="300px"/>
        <h3 className="product-name">Moroccanoil Treatment</h3>

        <p className="rating">
            <span>⭐</span> Ratings. <span className="rate-num">4.5/5.0</span>
            <span className="reviews">248 rate</span>
        </p>

        <p className="description"> Moroccanoil Treatment for all hair types.</p>
        
        <h3 className="size"><u>25ml.</u> 
            <b className="another-size">50ml.</b>
        </h3>
        
        <button className="add-to-cart">ADD TO CART</button>
        
    </div>

    <div classNameName="product-card">

        <img classNameName="img" src="./image2.png" alt="protein" width="300px" height="300px"/>
        <h3 classNameName="product-name">Natural Store - Repairing Shampoo</h3>

        <p classNameName="rating">
            <span>⭐</span> Ratings. <span classNameName="rate-num">4.5/5.0</span>
            <span classNameName="reviews">148 rate</span>
        </p>

        <p classNameName="description"> Gentle shampoo with argan oil.</p>

        <h3 classNameName="size"><u>100ml.</u></h3>
       
        <button classNameName="add-to-cart">ADD TO CART</button>            

    </div>

    <div classNameName="product-card">

        <img classNameName="img" src="./image3.png" alt="vitamin" width="300px" height="300px"/>
        <h3 classNameName="product-name">Natural Store - Hydrating & Hair Treatment</h3>

        <p classNameName="rating">
            <span>⭐</span> Ratings. <span classNameName="rate-num">4.5/5.0</span>
            <span className="reviews">156 rate</span>
        </p>

        <p classNameName="description">A conditioner and hair mask for deep hydration.</p>

        <h3 classNameName="size"><u>50ml.</u>
            <b classNameName="another-size">150ml.</b>
        </h3>
       
        <button classNameName="add-to-cart">ADD TO CART</button>           

    </div>

    <div classNameName="product-card">

        <img classNameName="img" src="./image4.png" alt="Glow25" width="300px" height="300px"/>
        <h3 classNameName="product-name">Rituals - The Ritual of Sakura Hair Care Set</h3>

        <p classNameName="rating">
            <span>⭐</span> Ratings. <span classNameName="rate-num">4.5/5.0</span>
            <span classNameName="reviews">201 rate</span>
        </p>

        <p classNameName="description">Premium Collagen Hydrolysate.</p>

        <div>
            <b classNameName="size"><u>250ml.</u></b>
        </div>
        <br/>

        <button classNameName="add-to-cart">ADD TO CART</button>

    </div>

</div>


};


export default product;
