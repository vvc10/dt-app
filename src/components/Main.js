import React from 'react'
import { useState } from 'react'
import '../assets/css/main.css'
import ProjectAssets from './ProjectCards'
import data from '../data/data.json'
import JourneyBoard from './JourneyBoard'
import NoticeBoard from './NoticeBoard'
import TaskModel from './TaskModel'
const Main = () => {
    const [showTaskModal, setTaskShowModal] = useState(false);

    const handleTaskOpenModal = () => {
        setTaskShowModal(true);
    };
  
    const handleTaskCloseModal = () => {
        setTaskShowModal(false);
    };
  
    const tasksubmit = (event) => {
      event.preventDefault();
      const taskName = event.target.taskName.value;
      const taskDescription = event.target.taskDescription.value;
  
      // Handle task submission logic here
      console.log('Task Submitted:', taskName, taskDescription);
  
      // Close the modal after submission
      handleTaskCloseModal();
    };
  

    return (
        <div className='main_sec'>
            <div className='main_head'>
                <h1>Technical Project Management</h1>
                <div className='mainhead_btn'>
                    <button onClick={handleTaskOpenModal}>Submit task</button>
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

            <TaskModel showTaskModal={showTaskModal} handleTaskClose={handleTaskCloseModal} handleTaskSubmit={tasksubmit} />
        </div>
    )
}

export default Main
