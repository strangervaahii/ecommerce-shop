import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Electronic commerce, or e-commerce, refers to the buying and selling of goods and services over the internet. It operates in different types of market segments and can be conducted over computers, tablets, smartphones, and other smart devices¹. Almost anything can be purchased through e-commerce today, which makes it highly competitive¹. It can be a substitute for brick-and-mortar stores, though some businesses choose to maintain both. E-commerce has helped businesses gain access to and establish a wider market presence by providing cheaper and more efficient distribution channels for their products or services.</p>
      </div>
    </div>
  )
}

export default DescriptionBox;