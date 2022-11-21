import React, { useState, useEffect } from "react";
import Card from '../components/card'
import NewTask from './newTask'

const Index = () => {
    const [todoObj, setTodoObj] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [editObj, setEditObj] = useState({})
    useEffect(() => {
        if (localStorage.getItem('todoObj') !== null) {
            setTodoObj(JSON.parse(localStorage.getItem("todoObj")));
        }
    }, [])
    const editTask = (task) => {
        setIsEdit(true)
        setEditObj(task)
    }
    const deleteTask=(task)=>{
        if (localStorage.getItem('todoObj') !== null) {
            let todoObj = JSON.parse(localStorage.getItem("todoObj"));
            todoObj.forEach((item, i) => {
                if (item?.taskIndex === task?.taskIndex) {
                    todoObj.splice(i, 1);
                }
            });
            localStorage.setItem('todoObj', JSON.stringify(todoObj));
            setTodoObj(todoObj);
            setIsEdit(false);
        }
    }
    return (
        <>
            <div className="container text-center">
                <NewTask editObj={editObj} setIsEdit={setIsEdit} isEdit={isEdit} setTodoObj={setTodoObj}/>
                {!isEdit &&
                    <div className="row g-3 mt-3">
                        {todoObj?.map((item, index) => {
                            return <div className="col-md-4" key={index+'main'}>
                                <Card
                                    task={item}
                                    editTask={editTask}
                                    deleteTask={deleteTask}
                                />
                            </div>
                        })}
                    </div>
                }
            </div>

        </>
    );
}
export default Index