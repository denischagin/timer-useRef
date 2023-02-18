import React from 'react'
import {Typography} from '@material-ui/core'

const Timer = ({ ms }) => {
    const msToHMSM = (ms) => {
        ms *= 10;
        let milliseconds = Math.floor((ms % 1000) / 10);
        let seconds = Math.floor((ms / 1000) % 60);
        let minutes = Math.floor((ms / (1000 * 60)) % 60);
        let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    }

    return (
        <Typography variant='h2' align='center'>{msToHMSM(ms)}</Typography>
    )
}

export default Timer