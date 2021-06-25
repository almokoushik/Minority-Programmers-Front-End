import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import user from "../../images/user.png"
import { useEffect } from 'react';
import { Button } from '@material-ui/core';
import ProgressBar from '../ProgressBar/ProgressBar';
import { UserContext } from '../../App';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const UserCourseInfo = (props) => {
    const [userData, setUserData] = useContext(UserContext)
    let total = 0;
    let completed = 0;

    if (props.props.weeks) {
        props.props.weeks.map(data => {
            total += parseInt(data.total);
            completed += parseInt(data.completed);
        })
    }


    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <div>
            <div className="row d-flex justify-content-center align-items-center text-white">
                <div className="w-75 text-start">
                    <h1 className="my-3">Week {userData.week}</h1>
                    <h4>Progress</h4>
                    <h5 className="text-center">10/10</h5>
                    <ProgressBar  props={70}></ProgressBar>
                    <h5 className="text-center">{80} % Completed</h5>
                </div>

            </div>
        </div>
    );
};

export default UserCourseInfo;