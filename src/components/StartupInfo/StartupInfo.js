import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import fakeData from "../../fakedata"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import mangoimg from "../../images/mango.png"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ProgressBar from '../ProgressBar/ProgressBar';
import LineDivider from "../LineDivider/LineDivider"
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import Carousel2 from "../Carousel/Carousel2"

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const StartupInfo = (props) => {
    const tags = [1, 2, 3, 4, 5, 6, 7, 8]
    const history = useHistory()
    const classes = useStyles();
    const {startupID} = useParams()
    // console.log(typeof id)
    const [startup, setStartup] = useState([])

    useEffect(() => {
        setStartup(fakeData.filter(data => data.id === parseInt(startupID)))
        // console.log(fakeData[0].id)

    }, [])
    // console.log(startup)
    const statePushback = () => {
        history.push("/incubator")

    }

    return (
        <div style={{
            backgroundImage: "linear-gradient(to right,#FF2694,#FFAA1B)"
        }}>

            {startup.length &&

                <div className="mx-5 px-5 py-5">

                    <div className="row d-flex justify-content-center me-1 align-items-center bg bg-white  my-2 pt-2" style={{ borderRadius: "30px 30px 0px 0px" }}>

                        <div className="col-md-3 col-sm-6 align-items-center my-3">
                            <IconButton aria-label="delete" onClick={() => statePushback()} className={classes.margin} size="medium" className="bg bg-light mx-3">
                                <ArrowBackIcon fontSize="inherit" />
                            </IconButton>
                            <img src={mangoimg} className="w-25"/>
                            <h6 style={{ float: 'right' }} className="pt-3">{startup[0].title}</h6>
                        </div>

                        <div className="col-md-3 col-sm-6 my-3">
                            <div className=" d-flex justify-content-center">
                                <h6>Fund Raise</h6>
                            <p className="text-end ms-4">{Math.floor(100*startup[0].fund/startup[0].target)}% Complete</p>
                            </div>
                            <h5>${startup[0].fund}/${startup[0].target}</h5>
                        </div>


                        <div className="col-md-3 col-sm-6 my-3 d-flex justify-content-center">
                            <div className="w-75 mx-3"> <ProgressBar props={startup[0].completed}></ProgressBar></div>
                        </div>



                        <div className="col-md-3 col-sm-6 my-3 d-flex justify-content-center">
                            <Button className="text-white pt-3 pb-2 px-5 text-center mx-2 " style={{
                                backgroundImage: "linear-gradient(to right,#FF51CA,#FFC502)",
                                borderRadius: "5px",
                                float: "left",
                            }}> <h6 className="text-start">Find Startups</h6> </Button>
                        </div>
                    </div>


                    <div className="row d-flex justify-content-center  my-2">

                        <div className="col-md-4 col-sm-12 bg bg-white  my-2">
                            <div className="ps-3 py-2 pe-2 text-start ">
                                <h4 className="my-2">Founded</h4>
                                <LineDivider></LineDivider>
                                <p className="mt-3">Website</p>
                                <div className="d-flex">
                                    <a className="text-decoration-none me-3" target="blank" href={`https://www.${startup[0].website}`}> <h5>{startup[0].website}</h5> </a>
                                    <a target="blank" href={startup[0].socials.twitter}><TwitterIcon /></a>
                                    <a target="blank" href={startup[0].socials.linkedin}> <LinkedInIcon className="mx-1" /></a>
                                    <a target="blank" href={startup[0].socials.facebook}> <FacebookIcon /></a>
                                </div>
                                <p>Location</p>
                                <h5>{startup[0].location}</h5>
                                <p>Team Size</p>
                                <h5 className="mb-3">{startup[0].size} People</h5>
                                <LineDivider></LineDivider>
                                <h5 className="my-3">Meat Our Team</h5>
                                {startup[0].peoples.map(people => {
                                    return <div className="d-flex align-items-center my-2">
                                        <img src={mangoimg} alt="" style={{ borderRadius: "50%" }} className="me-3" />
                                        <h5>{people.name}</h5>
                                    </div>
                                })

                                }
                                <LineDivider></LineDivider>
                                <h5>Tags</h5>
                                {
                                    startup[0].tags.map(tag => <Button className="bg bg-light m-1">{tag}</Button>)

                                }

                            </div>
                        </div>

                    <div className="col-md-8 col-sm-12  my-2 gl-5" >
                        <div className=" text-start   justify-content-end bg bg-white">
                                <div className="text-start ps-3 py-3 pe-3">
                                    <h3>About</h3>
                                    <p>{startup[0].about}</p>
                                <LineDivider></LineDivider>
                                <h3>Vision</h3>
                                <p>{startup[0].vision}</p>
                                </div>                         
                            </div>
                        <div className="text-start ps-3 py-3 pe-3 bg bg-white my-3">
                            <h3>Related Startups</h3>
                            <Carousel2></Carousel2>
                            
                            
                        </div>
                        </div>

                    </div>
                </div>
            }
        </div>
    );
};

export default StartupInfo;