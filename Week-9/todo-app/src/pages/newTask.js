import React, { useState } from "react";
import NewListCard from '../components/newListCard'

const NewTask = (props) => {
    const { setIsEdit, editObj } = { ...props }
    return (
        <>
            <div class="row g-3 justify-content-md-center">
                <div class="col-md-6">
                    <NewListCard
                        editObj={editObj}
                    />
                </div>
            </div>

        </>
    );
}
export default NewTask