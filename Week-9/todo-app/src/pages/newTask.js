import React, { useState } from "react";
import NewListCard from '../components/newListCard'
import { checkIfEmpty } from '../utils/utils'


const NewTask = (props) => {
    const { setIsEdit, editObj, isEdit, setTodoObj } = { ...props }
    const updateEditObj = (newTaskList) => {
        if (checkIfEmpty(newTaskList)) {
            if (localStorage.getItem('todoObj') !== null) {
                let todoObj = JSON.parse(localStorage.getItem("todoObj"));
                todoObj.forEach((item, i) => {
                    if (item?.taskIndex === editObj?.taskIndex) {
                        todoObj[i] = newTaskList;
                    }
                });
                localStorage.setItem('todoObj', JSON.stringify(todoObj));
                setIsEdit(false);
            }
        } else {
            alert('title or item desc is empty')
        }
    }
    return (
        <>
            <div className="row g-3 justify-content-md-center">
                <div className="col-md-6">
                    <NewListCard
                        editObj={editObj}
                        isEdit={isEdit}
                        updateEditObj={updateEditObj}
                        setTodoObj={setTodoObj}
                    />
                </div>
            </div>

        </>
    );
}
export default NewTask