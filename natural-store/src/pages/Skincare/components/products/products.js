

import React from 'react';
import './product.css';

const product = () => {
    return(
    <div className="all-product">
        <div className="product-grid">
            
            <div className="product-card">
                <img className="product-image" src="/skincare/serum_bottle_mockup.png" alt="Product 1"/>
                <h3 className="product-title">Natural Store - Serum</h3>
                <p className="product-rating"><span className="star">⭐</span>Ratings. <strong className="rat">4.9/5.0</strong> <span className="number0">218 rate</span></p>
                <p className="disc">Serum with 2% hyaluronic acid and B5</p>
                <p className="product-size"><span className="weight1">50ml.</span><span className="weight2">150ml.</span></p>
                <button className="add-to-cart">ADD TO CART</button>
            </div>
            
            <div className="product-card">
                <img className="product-image" src="/skincare/acne-cream.png" alt="Product 2"/>
                <h3 className="product-title">Natural Store - Acne Cream</h3>
                <p className="product-rating"><span className="star">⭐</span>Ratings. <strong className="rat">4.8/5.0</strong> <span className="number0">148 rate</span></p>
                <p className="disc">Acne treatment with salicylic acid and tea tree.</p>
                <p className="product-size"><span className="weight1">30g</span></p>
                <button className="add-to-cart">ADD TO CART</button>
            </div>
            
            <div className="product-card">
                <img className="product-image" src="/skincare/دون خلفية.PNG" alt="Product 3"/>
                <h3 className="product-title">Natural Store - Herbal Facial Wipes</h3>
                <p className="product-rating"><span className="star">⭐</span>Ratings. <strong className="rat">4.6/5.0</strong> <span className="number0">448 rate</span></p>
                <p className="disc">biodegradable Herbal Wipes made with 100% natural</p>
                <p className="product-size"><span className="weight1">100p.</span><span className="weight2">200p.</span></p>
                <button className="add-to-cart">ADD TO CART</button>
            </div>
            
            <div className="product-card">
                <img className="product-image" src="/skincare/norshing.png" alt="Product 4"/>
                <h3 className="product-title">SEPHORA - Nourishing Moisturizer</h3>
                <p className="product-rating"><span className="star">⭐</span>Ratings. <strong className="rat">4.8/5.0</strong> <span className="number0">248 rate</span></p>
                <p className="disc">Sephora Collection Nourishing Moisturizer</p>
                <p className="product-size"><span className="weight1">50g</span><span className="weight2">100g</span></p>
                <button className="add-to-cart">ADD TO CART</button>
            </div>
            
            <div className="product-card">
                <img className="product-image" src="/skincare/face-cleaner.png" alt="Product 5"/>
                <h3 className="product-title">Natural Store - Hydrating Face Cleanser</h3>
                <p className="product-rating"><span className="star">⭐</span>Ratings. <strong className="rat">4.7/5.0</strong> <span className="number0">156 rate</span></p>
                <p className="disc">Gentle cleanser with aloe vera and chamomile.</p>
                <p className="product-size"><span className="weight1">50ml.</span><span className="weight2">150ml.</span></p>
                <button className="add-to-cart">ADD TO CART</button>
            </div>
            
            <div className="product-card">
                <img className="product-image" src="/skincare/nigth-cream.png" alt="Product 6"/>
                <h3 className="product-title">Natural Store - Revitalizing Night Cream</h3>
                <p className="product-rating"><span className="star">⭐</span>Ratings. <strong className="rat">4.9/5.0</strong> <span className="number0">201 rate</span></p>
                <p className="disc">Nourishing night cream with retinol and hyaluronic acid.</p>
                <p className="product-size"><span className="weight1">50g</span><span className="weight2">100g</span></p>
                <button className="add-to-cart">ADD TO CART</button>
            </div>
            
            <div className="product-card">
                <img className="product-image" src="/skincare/glow-serum.png" alt="Product 7"/>
                <h3 className="product-title">Natural Store - Vitamin C Glow Serum</h3>
                <p className="product-rating"><span className="star">⭐</span>Ratings. <strong className="rat">4.9/5.0</strong> <span className="number0">334 rate</span></p>
                <p className="disc">Brightening serum with vitamin C and niacinamide.</p>
                <p className="product-size"><span className="weight1">50ml.</span><span className="weight2">150ml.</span></p>
                <button className="add-to-cart">ADD TO CART</button>
            </div>
            
            <div className="product-card">
                <img className="product-image" src="/skincare/herbal.png" alt="Product 8"/>
                <h3 className="product-title">Natural Store - Herbal Toner</h3>
                <p className="product-rating"><span className="star">⭐</span>Ratings. <strong className="rat">4.7/5.0</strong> <span className="number0">258 rate</span></p>
                <p className="disc">Infused with green tea, witch hazel, and rose water.</p>
                <p className="product-size"><span className="weight1">50ml.</span><span className="weight2">150ml.</span></p>
                <button className="add-to-cart">ADD TO CART</button>
            </div>
        </div>
    </div>
);

};


export default product;
