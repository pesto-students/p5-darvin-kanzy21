import React from "react";

const Card = (props) => {
    let { task, editTask } = { ...props }
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{task?.taskTitle}</h5>
                    {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                    <ul className="list-group list-group-flush">
                        {task.taskList.map((item,index) => {
                            return <li className="list-group-item" key={item?.itemIndex}>
                                <div class="input-group mb-3">
                                    <div class="input-group-text">
                                        <input class="form-check-input mt-0" type="checkbox" checked={item?.isCompleted} value="" aria-label="Checkbox for following text input" />
                                    </div>
                                    <input type="text" class="form-control" placeholder="Task" aria-label="Text input with checkbox" value={item?.itemDesc} />
                                </div>
                            </li>
                        })}
                    </ul>
                    <button class="btn btn-primary" type="button" onClick={() => editTask(task)}>Edit List</button>

                </div>
            </div>
        </>
    )
}
export default Card;