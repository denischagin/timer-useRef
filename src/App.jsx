import React from 'react';
import { useRef, useState } from 'react';
import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import Timer from './Timer';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	start: {
		color: theme.palette.success.main,
		fontSize: "20px"
	},
	pause: {
		color: theme.palette.primary.main
	},
	stop: {
		color: theme.palette.error.main
	},
}))

function App() {
	const [count, setCount] = useState(0);
	const timerRef = useRef();
	const classes = useStyles()


	const startTimer = () => {
		clearInterval(timerRef.current)
		timerRef.current = setInterval(() => {
			setCount(prev => prev + 1)
		}, 10)
	}

	const stopTimer = () => {
		clearInterval(timerRef.current)
		setCount(0)
	}

	const pauseTimer = () => {
		clearInterval(timerRef.current)
	}


	return (
		<Grid
			container
			direction='column'
			justifyContent='center'
			alignItems='center'
		>
			<Typography variant='h4'>Ты опоздал на:</Typography>	
			<Timer ms={count} />
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
				spacing={2}
			>
				<Grid item>
					<IconButton onClick={startTimer} className={classes.start}>
						<PlayCircleFilledIcon sx={{ fontSize: "80px" }}/>
					</IconButton>
				</Grid>
				<Grid item>
					<IconButton onClick={pauseTimer} className={classes.pause}>
						<PauseCircleIcon sx={{ fontSize: "80px" }}/>
					</IconButton>
				</Grid>
				<Grid item>
					<IconButton onClick={stopTimer} className={classes.stop}>
						<StopCircleIcon sx={{ fontSize: "80px" }} />
					</IconButton>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default App;