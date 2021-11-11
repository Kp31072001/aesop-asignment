import React from 'react'
import './ProductDetail.css'
import ControlPointIcon from '@mui/icons-material/ControlPoint';

function ProductDetail() {
    return (
        <div className="productDetail">
            <h1>Aésop</h1>
            <img src="https://www.aesop.com/u1nb1km7t5q7/2fnqAzD3tlKnIju5Q4h0C4/5357fca38d9ee9407d92ac48f34525e8/Aesop-Skin-Gentle-Facial-Cleansing-Milk-100mL-Large-782x796px.png" alt="" />
            <div className="details">
                <div className="subHead"><span>Skin </span>*<span> Cleanse </span></div>
                
                <h1>Gentle Facial Cleansing Milk</h1>
                <p>An exceptionally gentle cleanser for daily use, enhanced with botanicals renowned for their soothing properties. Removes makeup effortlessly and rinses with ease.</p>
                <hr className="bold" />
                <h3>Suited to</h3>
                <p>Most skin types, particularly dry and sensitive</p>
                <hr />
                <h3>Skin feel</h3>
                <p>Cleansed, softened and refreshed</p>
                <hr />
                <span className="icon"><h3>Key ingredients</h3><ControlPointIcon/></span>
                <p>Panthenol, Grape Seed, Sandalwood</p>
                <hr />
                <h3>Sizes</h3>
                <div className="choice">
                    
                <span><input type="radio" name="100 ml" id="1" />100 ml</span>
                
                <span><input type="radio" name="200ml" id="2" />200ml</span>
                </div>
                <button className="button">Add to Your Cart</button>
            </div>
        </div>
    )
}

export default ProductDetail
