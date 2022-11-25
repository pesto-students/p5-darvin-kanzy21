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
export const checkIfEmpty = (list) => {
    if (!list?.taskTitle) {
        return false;
    }
    return filterUnwanted(list?.taskList)
}