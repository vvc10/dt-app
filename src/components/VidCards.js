// src/components/AssetCard.js
import React, { useState } from 'react';
import '../assets/css/Cards.css';
import { RiArrowDropDownLine } from "react-icons/ri";

const AssetCard = ({ asset }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card" style={{ height: isExpanded ? '580px' : 'fit-content' }}>
      <div className='card_head' 
           style={{ borderRadius: isExpanded ? '15px 15px 0 0' : '15px' }} 
           onClick={toggleExpand}>
        <h3 className="card-title">
          {asset.asset_title}
          <RiArrowDropDownLine 
            style={{fontSize:'22px', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} 
          />
        </h3>
        <i className='i_btn'>i</i>
      </div>
      {isExpanded && (
        <div className="card-body">
          <p className="card-description"><label>Description: </label>{asset.asset_description}</p>
          {asset.asset_content_type === 'video' && asset.asset_content.trim() && (
            <iframe
              className="card-content"
              src={asset.asset_content.trim()}
              title={asset.asset_title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          {asset.asset_content_type === 'article' && (
            <a href={asset.asset_content.trim()} className="card-content">
              Read more
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default AssetCard;
