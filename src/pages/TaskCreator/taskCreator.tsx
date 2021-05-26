import React, {useState} from "react";
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";

type PropsType = {

};

// @ts-ignore
const TaskCreator: React.FC<PropsType> = () => {

    type DateType = MaterialUiPickersDate | null;

    const [selectedDateTo, setSelectedDateTo] = useState<DateType | null>(
        null
    );

    const handleDateToChange = (date: DateType | null) => {
        setSelectedDateTo(date);
    };

    return (
        <>
            <div>
                <h2>Title: </h2>
                <input/>
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
            </div>
            <div>
                <h2>Tags: </h2>
            </div>
        </>
    );
};

export default TaskCreator;