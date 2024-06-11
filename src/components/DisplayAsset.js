import React, { useState } from 'react';
import '../assets/css/Cards.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiFontSize } from 'react-icons/bi';
import { FaLightbulb } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";
import { BsQuestionSquareFill } from "react-icons/bs";
import { RiFlowerFill } from "react-icons/ri";

const DisplayAsset = ({ asset }) => {
    const [isThreadCollapsed, setIsThreadCollapsed] = useState(true);
    const [isThreadCollapsedII, setIsThreadCollapsedII] = useState(true);

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedProcess, setSelectedProcess] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    const collapseThread = () => {
        setIsThreadCollapsed(!isThreadCollapsed);
    };

    const collapseThreadII = () => {
        setIsThreadCollapsedII(!isThreadCollapsedII);
    };

    return (
        <div className="card" style={{ height: isExpanded ? '580px' : 'fit-content'   }}>
            <div className='card_head'
                style={{ borderRadius: isExpanded ? '15px 15px 0 0' : '15px' }}
                onClick={toggleExpand}
            >
                <h3 className="card-title">{asset.asset_title}
                    <RiArrowDropDownLine
                        style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                    />
                </h3>
                <i className='i_btn'>i</i>
            </div>
            {isExpanded && (
                <>
                    <p className="card-description"><label>Description: </label>{asset.asset_description}</p>
                    <div className='display_div'>
                        <div className='display_div_head' onClick={collapseThread}>
                            <span>Introduction</span>
                            <RiArrowDropDownLine style={{ fontSize: '30px', transform: isThreadCollapsed ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 0.3s ease'  }} />
                        </div>
                        {!isThreadCollapsed && (
                            <div className='displaydiv_dropdown'>

                                <div className='displaydiv_dropdown_head'>
                                    <p>The 4SA Method , How to bring a idea into progress ?</p>
                                    <div className='seemore_a'>
                                        <a href=''>See More</a>
                                    </div>

                                </div>


                            </div>
                        )}
                    </div>
                    <div className='display_div'>
                        <div className='display_div_head' onClick={collapseThreadII}>
                            <span>Thread A</span>
                            <RiArrowDropDownLine style={{ fontSize: '30px', transform: isThreadCollapsedII ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 0.3s ease'  }} />
                        </div>
                        {!isThreadCollapsedII && (
                            <div className='displaydiv_dropdown'>

                                <div className='displaydiv_dropdown_head'>
                                    <p>How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
                                    <div className='seemore_a'>
                                        <a href=''>See More</a>
                                    </div>

                                </div>


                            </div>
                        )}
                    </div>
                </>

            )}
        </div>
    );
};

export default DisplayAsset;
