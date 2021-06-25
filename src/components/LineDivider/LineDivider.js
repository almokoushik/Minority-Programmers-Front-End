import React from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 560,
        backgroundColor: theme.palette.background.paper,
    },
    dividerFullWidth: {
        margin: `5px 0 0 ${theme.spacing(3)}px`,
    },
    dividerInset: {
        margin: `5px 0 0 ${theme.spacing(10)}px`,
    },
    
}));

const LineDivider = () => {
    const classes = useStyles();
    return (
        <div>
            <Divider component="li"  style={{width:"100%",fontWeight:"bold"}}/>
            
        </div>
    );
};

export default LineDivider;