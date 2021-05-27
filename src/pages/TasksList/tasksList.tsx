import React, {useEffect} from "react";
import Task from "../../components/task/task";
import classes from "./tasksList.module.scss";
import Button from '@material-ui/core/Button';
import {getTasks} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {getTasksFromState} from "../../redux/selectors/selector";
import {
    NavLink,
} from "react-router-dom";

type PropsType = {};



const List: React.FC<PropsType> = () => {
    const tasks = useSelector(getTasksFromState);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTasks())
    }, [])

    return (
        <>
            <div className={classes.container}>
                <div className={classes.listWrap}>
                    <div>
                        <NavLink to="/schedule">year</NavLink>
                    </div>
                    <div>
                        {tasks.map((task: any) => (
                            <Task
                                key={task.id}
                                task={task}
                            />
                        ))}
                    </div>
                    <div>
                        <Button color="primary"><NavLink to="/task">add</NavLink></Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default List;