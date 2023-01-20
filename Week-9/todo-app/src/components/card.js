import React from "react";

const Card = (props) => {
    let { task, editTask, deleteTask } = { ...props }
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{task?.taskTitle}</h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                    <ul className="list-group list-group-flush">
                        {task.taskList.map((item, index) => {
                            return <li className="list-group-item" key={index+'cardlist'}>
                                <div className="input-group mb-3">
                                    <div className="input-group-text">
                                        <input className="form-check-input mt-0" disabled type="checkbox" checked={item?.isCompleted} value="" aria-label="Checkbox for following text input" />
                                    </div>
                                    <input type="text" className="form-control" disabled placeholder="Task" aria-label="Text input with checkbox" value={item?.itemDesc} />
                                </div>
                            </li>
                        })}
                    </ul>
                    <div className="d-flex  justify-content-evenly flex-row">
                        <button className="btn btn-primary" type="button" onClick={() => editTask(task)}>Edit List</button>
                        <button className="btn btn-danger pr-3" type="button" onClick={() => deleteTask(task)}>Delete List</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;