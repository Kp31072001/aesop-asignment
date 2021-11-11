import React, { useState } from 'react'
import './ProductVariety.css'

import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Arrow = styled.div`
    width: 100px;
    height: 100px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`



function ProductVariety() {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 1)
        } else {
            setSlideIndex(slideIndex < 1 ? slideIndex+1 : 0)
        }
    }


    return (
        <div className="variety">

        
        <div className="variety_detail">
                <h1>Accompany with</h1>
                <p>Gently dissolve eye makeup with Remove; after cleansing with Gentle Facial Cleansing Milk, apply alcohol-free B & Tea Balancing Toner to refine pores and prepare skin for hydration; and finish with soothing Camellia Nut Facial Hydrating Cream. Twice weekly, blend in a few drops of Damascan Rose Facial Treatment for additional nourishment.</p>
            </div>
        <div className="productVariety">
            
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlinedIcon />
            </Arrow>
            

            <Wrapper slideIndex={slideIndex}>
                <div className="product_img2">
                <img src="https://www.aesop.com/u1nb1km7t5q7/78baSSIGuV9yVyescL3EkO/d7aa29bbc32344b4d373233f55731781/Aesop-Skin-Remove-60mL-large.png" alt="" />
                <h3>Remove</h3>
                <p>Makeup removal for delicate eyes area</p>
            </div>
            <div className="product_img2">
                <img src="https://www.aesop.com/u1nb1km7t5q7/6NBAt8Ax6aPRmnvTs3oq3h/00987a956e92b2468a0daa4090c85e76/AesopSkin-B-Tea-Balancing-Toner-200mL-large.png" alt="" />
                <h3>B & Tea Balancing Toner</h3>
                <p>Balancing and hydrating, a light finish</p>
            </div>
            <div className="product_img2">
                <img src="https://www.aesop.com/u1nb1km7t5q7/5EM8cNCKUmSUw5Ad9vg3d1/73b569f7bcb04bafc22cd73e519d3f2a/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-large.png" alt="" />
                <h3>Caremal Nut Facial Hydrating Cream</h3>
                <p>For normal, dry or sensetive skin</p>
            </div>
            <div className="product_img2">
                <img src="https://www.aesop.com/u1nb1km7t5q7/4uMx0pAo5uZhfxP4V5nAzV/5e3e3fbd5877a92ee1b5b2e9105e9912/Aesop-Skin-Damascan-Rose-Facial-Treatment-25mL-Large-684x668px.png" alt="" />
                <h3>Damascan Rose Facial Treatment</h3>
                <p>Leaves skin feeling supple, nourished </p>
            </div>
            </Wrapper>
            
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlinedIcon />
            </Arrow>
        </div>
        </div>  
    )
}

export default ProductVariety
