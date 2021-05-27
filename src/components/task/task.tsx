import React from "react";
import classes from "./task.module.scss";

type PropsType = {
    task: any
};

const Task: React.FC<PropsType> = ({task}) => {
    return (
        <>
            <div className={classes.taskWrap}>
                <span className={classes.taskTitle}>
                    {task.title}
                </span>
                <span className={classes.taskDeadline}>
                    Should be&nbsp;completed for&nbsp;a week
                </span>
            </div>

        </>
    );
};

export default Task;