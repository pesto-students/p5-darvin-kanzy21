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
    return (
        <>
            <div class="container text-center">
                <NewTask editObj={editObj} setIsEdit={setIsEdit}/>
                {!isEdit &&
                    <div class="row g-3 mt-3">
                        {todoObj?.map((item, index) => {
                            return <div class="col-md-4">
                                <Card
                                    task={item}
                                    editTask={editTask}
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