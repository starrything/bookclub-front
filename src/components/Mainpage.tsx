import React, { useState, useEffect, useRef, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import * as actionOfUser from "@modules/user/actionOfUser";
import * as actionOfSettings from "@modules/system/actionOfSettings";
import axiosConfig from "@utils/axiosConfig";
import { SessionContext } from "@utils/cookies";
import {Box, Divider, Grid, Paper} from "@mui/material";

const Main = (props: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const session = useContext(SessionContext);

  useEffect(() => {
    //TODO:
    //checkValidToken();
    getRoleList();
    getUserList();
  }, []);

  const getRoleList = () => {
    axiosConfig.get("/api/v1/role/list")
        .then(function (response) {
          // success
          //setRoleOptions(response.data);
          let roleOptions: { value: string; label: string; }[] = [];

          if (response.data !== undefined && response.data.length > 0) {
            response.data.forEach((element: { [x: string]: string; }) => {
              roleOptions.push({
                value: element["role"],
                label: element["role"],
              });
            });
            //setRoleList(roleOptions);
            dispatch(actionOfSettings.setRoleList(roleOptions));
          }
        })
        .catch(function (error) {
          // error
        })
        .then(function () {
          // finally
        });
  };

  const getUserList = () => {
    axiosConfig.get("/api/v1/user/list")
        .then(function (response) {
          // success
          let userOptions: { value: string; label: string; }[] = [];
          response.data.forEach((element: { [x: string]: string; }) => {
            userOptions.push({
              value: element["username"],
              label: element["firstName"] + " " + element["lastName"],
            });
          });
          // setUserList(userOptions);
          dispatch(actionOfUser.setUserList(userOptions));
        })
        .catch(function (error) {
          // error
        })
        .then(function () {
          // finally
        });
  };

  return (
      <main>
        <Paper>
          <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to="0"
                  className=""
                  aria-label="Slide 1"
              ></button>
              <button
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                  className="active"
                  aria-current="true"
              ></button>
              <button
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item">
                <svg
                    className="bd-placeholder-img"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                >
                  <rect width="100%" height="100%" fill="#777"></rect>
                </svg>

                <div className="container">
                  <div className="carousel-caption text-start">
                    <h1>처음 오셨나요?</h1>
                    <p>
                      회원가입하시고 지금 바로 MeetUp에 참여해보세요!!
                    </p>
                    <p>
                      <RouterLink className="btn btn-lg btn-primary" to="/signup">
                        Sign up today
                      </RouterLink>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                <svg
                    className="bd-placeholder-img"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                >
                  <rect width="100%" height="100%" fill="#777"></rect>
                </svg>

                <div className="container">
                  <div className="carousel-caption">
                    <h1>Another example headline.</h1>
                    <p>
                      Some representative placeholder content for the second slide
                      of the carousel.
                    </p>
                    <p>
                      <RouterLink className="btn btn-lg btn-primary" to="#">
                        Learn more
                      </RouterLink>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <svg
                    className="bd-placeholder-img"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                >
                  <rect width="100%" height="100%" fill="#777"></rect>
                </svg>

                <div className="container">
                  <div className="carousel-caption text-end">
                    <h1>One more for good measure.</h1>
                    <p>
                      Some representative placeholder content for the third slide of
                      this carousel.
                    </p>
                    <p>
                      <RouterLink className="btn btn-lg btn-primary" to="#">
                        Browse gallery
                      </RouterLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </Paper>
        {/* <!-- Marketing messaging and featurettes
  ================================================== --> */}
        {/* <!-- Wrap the rest of the page in another container to center all the content. --> */}

        {/* <!-- Three columns of text below the carousel --> */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>

            <h2>Heading</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <RouterLink className="btn btn-secondary" to="#">
                View details »
              </RouterLink>
            </p>
          </Grid>

          <Grid item xs={12} md={4}>
            <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>

            <h2>Heading</h2>
            <p>
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
            <p>
              <RouterLink className="btn btn-secondary" to="#">
                View details »
              </RouterLink>
            </p>
          </Grid >

          <Grid item xs={12} md={4}>
            <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>

            <h2>Heading</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <RouterLink className="btn btn-secondary" to="#">
                View details »
              </RouterLink>
            </p>
          </Grid>
        </Grid>
        {/* <!-- /.row --> */}
        <Divider/>

        {/* <!-- START THE FEATURETTES --> */}
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <Grid item xs={12} md={8}>
            <h2 className="featurette-heading">
              First featurette heading.{" "}
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
                sx={{
                  position: 'relative',
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                }}
            >
              <svg
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width="500"
                  height="500"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: 500x500"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee"></rect>
                <text x="50%" y="50%" fill="#aaa" dy=".3em">
                  500x500
                </text>
              </svg>
            </Box>
          </Grid>
          {/*<Main title="From the firehose" posts={posts} />*/}
        </Grid>
        <Divider/>

        <Grid container spacing={5} sx={{ mt: 3 }}>
          <Grid item xs={12} md={8}>
            <h2 className="featurette-heading">
              Oh yeah, it’s that good.{" "}
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p className="lead">
              Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual
              real-world content in place.
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
                sx={{
                  position: 'relative',
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                }}
            >
              <svg
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width="500"
                  height="500"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: 500x500"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee"></rect>
                <text x="50%" y="50%" fill="#aaa" dy=".3em">
                  500x500
                </text>
              </svg>
            </Box>
          </Grid>
        </Grid>
        <Divider/>

        <Grid container spacing={5} sx={{ mt: 3}}>
          <Grid item xs={12} md={8}>
            <h2 className="featurette-heading">
              And lastly, this one.{" "}
              <span className="text-muted">Checkmate.</span>
            </h2>
            <p className="lead">
              And yes, this is the last block of representative placeholder
              content. Again, not really intended to be actually read, simply
              here to give you Link better view of what this would look like
              with some actual content. Your content.
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
                sx={{
                  position: 'relative',
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                }}
            >
              <svg
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width="500"
                  height="500"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: 500x500"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee"></rect>
                <text x="50%" y="50%" fill="#aaa" dy=".3em">
                  500x500
                </text>
              </svg>
            </Box>
          </Grid>
        </Grid>
        {/* <!-- /END THE FEATURETTES --> */}
      </main>
  );
};

export default Main;
