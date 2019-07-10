import React from "react";
import "react-step-progress-bar/styles.css";
import {ProgressBar} from "react-step-progress-bar";

export default (props) => {
    return (
        <footer className={'progress__bar'}>
            <ProgressBar
                percent={props.percent}
                filledBackground="linear-gradient(blue)"
            />
        </footer>
    );
};