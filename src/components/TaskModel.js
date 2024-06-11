import React from 'react'
import '../assets/css/TaskSubmit.css'
const TaskModel = ({ showTaskModal, handleTaskClose, handleTaskSubmit }) => {
    const showHideClassName = showTaskModal ? "modal display-block" : "modal display-none";

    return (
        <div>
            <div className={showHideClassName}>
                <section className="modal-main">
                <div className='hideTaskmodal' onClick={handleTaskClose}> + </div>
                    <h2>Submit Task</h2>
                    <form onSubmit={handleTaskSubmit}>
                        <label>
                            Task Name:
                            <input type="text" name="taskName" required />
                        </label>
                        <label>
                            Task Description:
                            <textarea name="taskDescription" required></textarea>
                        </label>
                        <div className="tasksubmit_btns">
                            <button type="submit">Submit</button>
                            <button type="button" onClick={handleTaskClose}>Close</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default TaskModel
