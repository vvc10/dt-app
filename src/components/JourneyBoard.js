import React from 'react';
import { useState } from 'react';
import '../assets/css/JourneyBoard.css';

const JourneyBoard = ({ data }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div
            className={`journey_board_float ${isVisible ? 'visible' : ''}`}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            <div className='jbf_head' onClick={toggleVisibility}>
                <p>Journey Board</p>
            </div>
            <div className='jbf_bod'>
                <div className='task_num' style={{ display: isVisible ? 'none' : 'block' }}>
                    <button>{data.length}</button>
                </div>
                {data.map((task, index) => (
                    <div key={index}>
                        <h1>{task.task_title}</h1>
                        <ul>
                            {task.assets.map((asset, index) => (
                                <li key={index}>{asset.asset_title}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JourneyBoard;
