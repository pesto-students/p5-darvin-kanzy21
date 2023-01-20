import React, { useState, useEffect } from "react";
import { checkIfEmpty } from '../utils/utils'


const NewListCard = (props) => {
    const { editObj, updateEditObj, isEdit,setTodoObj } = { ...props }
    const [newTaskList, setNewTaskList] = useState({
        taskIndex: 1, taskTitle: '', taskList: [{
            isCompleted: false, itemDesc: ''
        }]
    })
    useEffect(() => {
        if (Object.keys(editObj)?.length) {
            setNewTaskList(editObj)
        }
    }, [editObj])
    const handleChange = (field, e, itemIndex) => {
        let tempTaskList = newTaskList;
        let taskList = tempTaskList?.taskList;
        switch (field) {
            case 'title':
                tempTaskList.taskTitle = e?.target?.value;
                setNewTaskList((prev) => ({
                    taskTitle:  e?.target?.value,
                    ...prev
                }))
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
                break;
            default: return;
        }
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
                tempTask.taskIndex = todoObj.length + 1;
                todoObj?.unshift(newTaskList)
                localStorage.setItem('todoObj', JSON.stringify(todoObj));
                setTodoObj(todoObj)
            } else {
                localStorage.setItem('todoObj', JSON.stringify([newTaskList]));
                setTodoObj([newTaskList])
            }
            setNewTaskList((prev) => ({
                taskIndex: 1, taskTitle: '', taskList: [{
                    isCompleted: false, itemDesc: ''
                }],
                ...prev
            }))
            setNewTaskList({
                taskIndex: 1, taskTitle: '', taskList: [{
                    isCompleted: false, itemDesc: ''
                }]
            })
        } else {
            alert('title or item desc is empty')
        }
    }
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Task list name</h5>
                    <div className="row mb-3">
                        <label for="title" className="col-sm-2 col-form-label">List Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" value={newTaskList?.taskTitle} onChange={(e) => handleChange('title', e)} />
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        {newTaskList?.taskList?.length && newTaskList?.taskList?.map((item, itemIndex) => {
                            return <li className="list-group-item" key={itemIndex+'newtask'}>
                                <div className="input-group mb-3">
                                    <div className="input-group-text">
                                        <input className="form-check-input mt-0" checked={item?.isCompleted} type="checkbox" onChange={(e) => handleChange('checkbox', e, itemIndex)} aria-label="Checkbox for following text input" />
                                    </div>
                                    <input type="text" className="form-control" value={item?.itemDesc} onChange={(e) => handleChange('task', e, itemIndex)} placeholder="Task" aria-label="Text input with checkbox" />
                                    <div className="input-group-text">
                                        <button className="btn btn-secondary" type="button" onClick={() => addNewTask()}>Add task</button>
                                    </div>
                                </div>
                            </li>
                        })}
                    </ul>
                    <button className="btn btn-primary" type="button" onClick={() => isEdit ? updateEditObj(newTaskList) : addList()}>Save List</button>
                </div>
            </div>
        </>
    )
}
export default NewListCard;