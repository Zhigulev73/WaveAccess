import React, {useState} from "react";
import classes from "./taskCreator.module.scss";
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from '@material-ui/core/styles';
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";
import Slider from '@material-ui/core/Slider';
import {useDispatch} from "react-redux";
import {addTask} from "../../redux/actions";

type PropsType = {

};

// @ts-ignore
const TaskCreator: React.FC<PropsType> = () => {
    const dispatch = useDispatch();
    type DateType = MaterialUiPickersDate | null;

    const [selectedDateTo, setSelectedDateTo] = useState<DateType | null>(
        null
    );
    const [text, setText] = useState<string>('');

    const handleDateToChange = (date: DateType | null) => {
        setSelectedDateTo(date);
    };

    const inputTextChanger = (event: any) => {
        setText(event.target.value)
    }

    const NewTaskParams = {
        title: text
    }
    const valuetext = (value: number) => {
        return `${value}°C`;
    }
    const AddHandleEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            dispatch(addTask(NewTaskParams));
            setText('');
        }
    };

    return (
        <>
            <div className={classes.listWrap}>
                <div>
                <h2>Title: </h2>
                <input
                    onChange={inputTextChanger}
                    value={text}
                    onKeyPress={AddHandleEnter}
                />
            </div>
            <div>
                <h2>Deadline: </h2>
                <input type={'checkbox'} /> <span> Task for a month</span>
                <input type={'checkbox'} /> <span> Task for a week</span>
                <input type={'checkbox'} /> <span> Task with deadline</span>
            </div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    variant="inline"
                    format="dd-MM-yyyy"
                    margin="normal"
                    id="date-picker-inline2"
                    value={selectedDateTo}
                    onChange={handleDateToChange}
                    KeyboardButtonProps={{
                        "aria-label": "change date",
                    }}
                    style={{width: 180, marginBottom: "20px"}}
                    disableToolbar
                />
            </MuiPickersUtilsProvider>
            <div>
                <h2>Priority: </h2>
                <div className={classes.root}>
                    <Slider
                        defaultValue={3}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={1}
                        max={10}
                    />
                </div>
            </div>
            <div>
                <h2>Tags: </h2>
            </div>
            </div>
        </>
    );
};

export default TaskCreator;