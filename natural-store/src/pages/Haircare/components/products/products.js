
import React from 'react';
import './product.css';

const product = () => {
    <div className="product-section">

    <div className="product-card">

        <img class="img" src="./1 image.png" alt="omega-3" width="300px" height="300px"/>
        <h3 class="product-name">Moroccanoil Treatment</h3>

        <p class="rating">
            <span>⭐</span> Ratings. <span class="rate-num">4.5/5.0</span>
            <span class="reviews">248 rate</span>
        </p>

        <p class="description"> Moroccanoil Treatment for all hair types.</p>
        
        <h3 class="size"><u>25ml.</u> 
            <b class="another-size">50ml.</b>
        </h3>
        
        <button class="add-to-cart">ADD TO CART</button>
        
    </div>

    <div className="product-card">

        <img className="img" src="./image2.png" alt="protein" width="300px" height="300px"/>
        <h3 className="product-name">Natural Store - Repairing Shampoo</h3>

        <p className="rating">
            <span>⭐</span> Ratings. <span className="rate-num">4.5/5.0</span>
            <span className="reviews">148 rate</span>
        </p>

        <p className="description"> Gentle shampoo with argan oil.</p>

        <h3 className="size"><u>100ml.</u></h3>
       
        <button className="add-to-cart">ADD TO CART</button>            

    </div>

    <div className="product-card">

        <img className="img" src="./image3.png" alt="vitamin" width="300px" height="300px"/>
        <h3 className="product-name">Natural Store - Hydrating & Hair Treatment</h3>

        <p className="rating">
            <span>⭐</span> Ratings. <span className="rate-num">4.5/5.0</span>
            <span class="reviews">156 rate</span>
        </p>

        <p className="description">A conditioner and hair mask for deep hydration.</p>

        <h3 className="size"><u>50ml.</u>
            <b className="another-size">150ml.</b>
        </h3>
       
        <button className="add-to-cart">ADD TO CART</button>           

    </div>

    <div className="product-card">

        <img className="img" src="./image4.png" alt="Glow25" width="300px" height="300px"/>
        <h3 className="product-name">Rituals - The Ritual of Sakura Hair Care Set</h3>

        <p className="rating">
            <span>⭐</span> Ratings. <span className="rate-num">4.5/5.0</span>
            <span className="reviews">201 rate</span>
        </p>

        <p className="description">Premium Collagen Hydrolysate.</p>

        <div>
            <b className="size"><u>250ml.</u></b>
        </div>
        <br/>

        <button className="add-to-cart">ADD TO CART</button>

    </div>

</div>


};


export default product;
