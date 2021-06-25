import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import user from "../../images/user.png"
import { useEffect } from 'react';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const UserInfo = (props) => {
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
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-md-5 col-sm-6">
                    <img src={user} className="w-50" alt="" style={{ border: '5px solid navy', borderRadius: "50%" }} />

                </div>
                <div className="col-md-7 col-sm-6 text-start">
                    <h1>Welcome back, <br /> Shot</h1>
                    <h4>{completed * 100 / total}% Completed</h4>
                    <a target="blank" href="https://www.linkedin.com/in/almokoushik/" className="text-decoration-none"> <Button size="small" variant="contained" color="primary"> <h6 className="mt-1 mx-3">Resume</h6></Button>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default UserInfo;