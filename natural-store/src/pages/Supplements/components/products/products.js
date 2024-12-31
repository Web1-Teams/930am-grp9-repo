import React from 'react';
import './product.css';

const product = () => {

<div classNameName="product-section">

    <div classNameName="product-card">

        <img classNameName="img" src="/s1.png" alt="omega-3" width="300px" height="300px"/>
        <h3 classNameName="product-name">Natural store - Omega-3 Fish Oil</h3>

        <p classNameName="rating">
            <span>⭐</span> Ratings. <span className="rate-num">4.5/5.0</span>
            <span className="reviews">248 rate</span>
        </p>

        <p className="description"> High-potency Omega-3 capsules with EPA and DHA.</p>
    
        <h3 className="size"><u>90 Softgels</u></h3>
    
        <button className="add-to-cart">ADD TO CART</button>
    
    </div>

    <div className="product-card">

        <img className="img" src="/s2.png" alt="protein" width="300px" height="300px"/>
        <h3 className="product-name">Natural store - Premium Whey Protein</h3>

        <p className="rating">
            <span>⭐</span> Ratings. <span className="rate-num">4.5/5.0</span>
            <span className="reviews">148 rate</span>
        </p>

        <p className="description"> High-quality whey protein with 24g of protein per serving.</p>

        <h3 className="size"><u>1000 g</u></h3>
   
        <button className="add-to-cart">ADD TO CART</button>            

    </div>

    <div className="product-card">

        <img className="img" src="/s3.png" alt="vitamin" width="300px" height="300px"/>
        <h3 className="product-name">Vitamin D3 + K2 Depot</h3>

        <p className="rating">
            <span>⭐</span> Ratings. <span className="rate-num">4.5/5.0</span>
            <span className="reviews">156 rate</span>
        </p>

        <p className="description"> All-Trans K2-MK7 + 5000 IU Vitamin D3, High Dose.</p>

        <h3 className="size"><u>180 pills</u></h3>
   
        <button className="add-to-cart">ADD TO CART</button>           

    </div>

    <div className="product-card">

        <img className="img" src="/s4.png" alt="Glow25" width="300px" height="300px"/>
        <h3 className="product-name">Glow25® - Collagen Powder </h3>

        <p className="rating">
            <span>⭐</span> Ratings. <span className="rate-num">4.5/5.0</span>
            <span className="reviews">201 rate</span>
        </p>

        <p className="description">Premium Collagen Hydrolysate.</p>

        <div>
            <b className="size"><u>450g</u></b>
            <b className="size-1">900g</b>
        </div>
        <br/>

        <button className="add-to-cart">ADD TO CART</button>

    </div>

</div>


}


export default product;