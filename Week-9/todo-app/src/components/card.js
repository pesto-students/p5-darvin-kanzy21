import React from "react";

const Card = (props) => {
    let { listTitle, taskDesc, taskIndex } = { ...props }
    console.log(listTitle,taskDesc,taskIndex);
    return(
        <>
        hi
        </>
    )
}
export default Card;