import React, {useEffect} from "react";
import Task from "./task";
import {getTasks} from "../../redux/actions";
import {useSelector} from "react-redux";
import {getTasksFromState} from "../../redux/selectors/selector";


type PropsType = {};



const List: React.FC<PropsType> = () => {
    useEffect(() => {
        getTasks()
    }, [])

    const tasks = useSelector(getTasksFromState);

    return (
        <>
            {tasks.map((task: any) => (
                <Task
                    task={task}
                />
            ))}
        </>
    );
};

export default List;