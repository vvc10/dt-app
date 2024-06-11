import React from 'react'
import '../assets/css/main.css'
import ProjectAssets from './ProjectCards'
import data from '../data/data.json'
import JourneyBoard from './JourneyBoard'
import NoticeBoard from './NoticeBoard'
const Main = () => {
    return (
        <div className='main_sec'>
            <div className='main_head'>
                <h1>Technical Project Management</h1>
                <div className='mainhead_btn'>
                    <button>Submit task</button>
                </div>

            </div>
            <div className='main_des'>

                <h1>Explore the world of Management</h1>
                <p>
                    As a project manager, you play an important reole in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?
                </p>

            </div>

            <div className='main_cards'>
                <ProjectAssets tasks={data.tasks} />
            </div>

            <JourneyBoard data={data.tasks} />
            <NoticeBoard data={data.notice}/>
        </div>
    )
}

export default Main
