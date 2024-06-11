import React from 'react';
import { useState } from 'react';
import '../assets/css/NoticeBoard.css';

const NoticeBoard = ({ data }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div
            className={`notice_board_float ${isVisible ? 'visible' : ''}`}
            // onMouseEnter={() => setIsVisible(true)}
            // onMouseLeave={() => setIsVisible(false)}
        >
            <div className='nbf_head' onClick={toggleVisibility}>
                <span>+</span>
                <div className='noticeboard_label'>
                    N<br/>o<br/>t<br/>i<br/>c<br/>e<br/> <br/>B<br/>o<br/>a<br/>r<br/>d
                </div>
            </div>
            <div className='nbf_bod'>

            </div>
        </div>
    );
};

export default NoticeBoard;
