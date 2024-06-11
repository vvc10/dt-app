import React, { useState } from 'react';
import '../assets/css/Cards.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiFontSize } from 'react-icons/bi';
import { FaLightbulb } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";
import { BsQuestionSquareFill } from "react-icons/bs";
import { RiFlowerFill } from "react-icons/ri";

const ThreadBuilderCard = ({ asset }) => {
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

            <div className='thread_div'>
                <div className='thread_div_head' onClick={collapseThread}>
                    <span>Thread A</span>
                    <RiArrowDropDownLine style={{ fontSize: '30px', transform: isThreadCollapsed ? 'rotate(0deg)' : 'rotate(180deg)' , transition: 'transform 0.3s ease' }} />
                </div>
                {!isThreadCollapsed && (
                    <div className='threaddiv_dropdown'>
                    
                        <div className='thread_div_inputbod'>
                            <div className='thread_div_inputbod1'>
                                <label>Sub thread 1</label>
                                <textarea>Enter Text here</textarea>
                            </div>
                            <div className='thread_div_inputbod2'>
                                <label>Sub interpretation 1</label>
                                <textarea>Enter Text here</textarea>
                            </div>
                        </div>
                        <div className='btns_area'>
                            <div className='btns_o'>
                                <FaLightbulb />
                                <MdOutlineComment />
                                <BsQuestionSquareFill />
                                <RiFlowerFill />
                            </div>
                            <div className='btns_oi'>
                                
                                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                                    <option value="">Select category</option>
                                    <option value="category1">Category 1</option>
                                    <option value="category2">Category 2</option>
                                    <option value="category3">Category 3</option>
                                </select>
                            </div>
                            <div className='btns_oii'>
                               
                                <select value={selectedProcess} onChange={(e) => setSelectedProcess(e.target.value)}>
                                    <option value="">Select process</option>
                                    <option value="process1">Process 1</option>
                                    <option value="process2">Process 2</option>
                                    <option value="process3">Process 3</option>
                                </select>
                            </div>
                        </div>
                        <div className='subthread_btn'>
                            <button>+ Sub-thread</button>
                        </div>
                        <div className='thread_div_sum'>
                            <div className='thread_div_sum_head'>
                                <span>Summary for Thread A</span>
                                <textarea>Enter Text here</textarea>
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

export default ThreadBuilderCard;
