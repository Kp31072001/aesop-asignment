import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className="product">
            <img className="product_img" src="https://www.aesop.com/u1nb1km7t5q7/mxlJIOIMuyoNmCVZsHSZw/2c8cb79b9f24c268342405d97839522e/Aesop-Skin-Gentle-Facial-Cleansing-Milk-Texture-50-50-Tablet-1536x950px.jpg" alt="" />
            <div className="product_detail">
                <h4>How to use</h4>
                <p className="detail_p">Morning and evening, shake before use; then dispense a small amount onto hands and massage over face and neck. Rinse with tepid water, or remove using a damp cloth.</p>
                <hr className="bold" />
                <h4>Dosage</h4>
                <p>Half a teaspoon</p>
                <hr />
                <h4>Texture</h4>
                <p>Non-foaming, water-soluble emulsion</p>
                <hr />
                <h4>Aroma</h4>
                <p>Mild, woody, herbaceous</p>
            </div>
        </div>
    )
}

export default Product
