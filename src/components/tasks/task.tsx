import React from "react";

type PropsType = {
    task: any
};

// @ts-ignore
const Task: React.FC<PropsType> = ({task}) => {
    return (
        <>
            {task}
        </>
    );
};

export default Task;