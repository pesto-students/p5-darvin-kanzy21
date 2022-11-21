import React, { useState, useEffect } from "react";

const NewListCard = (props) => {
    const { editObj } = { ...props }
    const [newTaskList, setNewTaskList] = useState({
        taskIndex: 1, taskTitle: '', taskList: [{
            isCompleted: false, itemDesc: ''
        }]
    })
    useEffect(() => {
        if(Object.keys(editObj)?.length){
            setNewTaskList(editObj)
        }
    }, [editObj])
    const handleChange = (field, e, itemIndex) => {
        let tempTaskList = newTaskList;
        let taskList = tempTaskList?.taskList;
        switch (field) {
            case 'title':
                tempTaskList.taskTitle = e?.target?.value;
                setNewTaskList(tempTaskList)
                break;
            case 'task':
                taskList[itemIndex].itemDesc = e?.target?.value;
                setNewTaskList((prev) => ({
                    taskList: [...taskList],
                    ...prev
                }))
                break;
            case 'checkbox':
                taskList[itemIndex].isCompleted = !taskList[itemIndex].isCompleted;
                setNewTaskList((prev) => ({
                    taskList: [...taskList],
                    ...prev
                }))
                // setNewTaskList(tempTaskList)
                break;
            default: return;
        }
    }
    const filterUnwanted = (arr) => {
        const required = arr.filter(el => {
            return el.itemDesc;
        });
        if (required?.length === arr?.length) {
            return true
        } else {
            return false
        }
    };
    const checkIfEmpty = (list) => {
        if (!list?.taskTitle) {
            return false;
        }
        return filterUnwanted(list?.taskList)
    }
    const addNewTask = async () => {
        if (checkIfEmpty(newTaskList)) {
            let tempTaskList = newTaskList?.taskList;
            tempTaskList?.unshift({
                isCompleted: false, itemDesc: ''
            })
            setNewTaskList((prev) => ({
                taskList: [...tempTaskList],
                ...prev
            }))
        } else {
            alert('title or item desc is empty')
        }
    }
    const addList = () => {
        if (checkIfEmpty(newTaskList)) {
            if (localStorage.getItem('todoObj') !== null) {
                let todoObj = JSON.parse(localStorage.getItem("todoObj"));
                let tempTask = newTaskList;
                tempTask.taskIndex = todoObj[todoObj.length - 1].taskIndex + 1;

                todoObj?.unshift(newTaskList)
                localStorage.setItem('todoObj', JSON.stringify(todoObj));
            } else {
                localStorage.setItem('todoObj', JSON.stringify([newTaskList]));
            }
        } else {
            alert('title or item desc is empty')
        }
    }
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Task list name</h5>
                    <div class="row mb-3">
                        <label for="title" class="col-sm-2 col-form-label">List Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="title" value={newTaskList?.taskTitle} onChange={(e) => handleChange('title', e)} />
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        {newTaskList?.taskList?.length && newTaskList?.taskList?.map((item, itemIndex) => {
                            return <li className="list-group-item" key={itemIndex}>
                                <div class="input-group mb-3">
                                    <div class="input-group-text">
                                        <input class="form-check-input mt-0" checked={item?.isCompleted} type="checkbox" onChange={(e) => handleChange('checkbox', e, itemIndex)} aria-label="Checkbox for following text input" />
                                    </div>
                                    <input type="text" class="form-control" value={item?.itemDesc} onChange={(e) => handleChange('task', e, itemIndex)} placeholder="Task" aria-label="Text input with checkbox" />
                                    <div class="input-group-text">
                                        <button class="btn btn-secondary" type="button" onClick={() => addNewTask()}>Add task</button>
                                    </div>
                                </div>
                            </li>
                        })}
                    </ul>
                    <button class="btn btn-primary" type="button" onClick={() => addList()}>Save List</button>
                </div>
            </div>
        </>
    )
}
export default NewListCard;