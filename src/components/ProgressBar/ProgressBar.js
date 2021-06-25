import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        // backgroundColor: '#1a90ff',
        backgroundImage: "linear-gradient(to right,#FF51CA,#FFC502)",
    },
}))(LinearProgress);

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

const ProgressBar = (props) => {
    const classes = useStyles();

    return (
        <div className="mb-3">
            <BorderLinearProgress variant="determinate" value={props.props} />
        </div>
    );
};

export default ProgressBar;











