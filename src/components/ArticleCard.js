import React, { useState } from 'react';
import '../assets/css/Cards.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiFontSize } from 'react-icons/bi';
import { FaLightbulb } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";
import { BsQuestionSquareFill } from "react-icons/bs";
import { RiFlowerFill } from "react-icons/ri";
import 'draft-js/dist/Draft.css';
import Editor from './Editor';

const ArticleCard = ({ asset }) => {
    const [isThreadCollapsed, setIsThreadCollapsed] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedProcess, setSelectedProcess] = useState('');
     const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    const collapseThread = () => {
        setIsThreadCollapsed(!isThreadCollapsed);
    };

    return (
        <div className="card" style={{ height: isExpanded ? '580px' : 'fit-content' }}>
            <div className='card_head'
                style={{ borderRadius: isExpanded ? '15px 15px 0 0' : '15px' }}
                onClick={toggleExpand}
            >
                <h3 className="card-title">
                    {asset.asset_title}
                    <RiArrowDropDownLine
                        style={{ fontSize: '22px', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                    />
                </h3>
                <i className='i_btn'>i</i>
            </div>
            {isExpanded && (
                <>
                    <p className="card-description"><label>Description: </label>{asset.asset_description}</p>
                    <div className='article_div'>
                        <div className='article_div_head'>
                            <span>Title</span>
                            <input type='text' />
                        </div>
                        <div className='article_div_cont'>
                            <span>Content</span>
                            <div className='editor'>
                                <Editor />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ArticleCard;
