import React from 'react'
import "./App.css";

import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const style = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BoxDetails({detailsItem, showDetails, handleClose}) {
    
  const dateOfBirth = new Date();
  
  return (
    <div className="boxDetails">
            {showDetails ? (
              <Modal
                keepMounted
                open={showDetails}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
              >
                <Box sx={style}>
                  <Grid container spacing={2}>
                    <Grid item xs>
                      <img
                        src={detailsItem.picture}
                        alt=""
                        className="imageShadowDetails"
                        style={{
                          width: 350,
                          height: 600,
                          marginTop: "-10%",
                          marginLeft: "-40%",
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <div classNama="parent">
                        <div classNama="child1">
                          <Typography
                            style={{
                              fontSize: "400%",
                              marginLeft: "-20%",
                              fontWeight: "bold",
                              WebkitTextStroke: "2px #F2753B",
                              color: "white",
                            }}
                          >
                            {detailsItem.firstname}
                          </Typography>
                          <Typography
                            style={{
                              fontSize: "650%",
                              fontWeight: "bold",
                              color: "#F2753B",
                              marginTop: "-8%",
                              marginLeft: "-20%",
                            }}
                          >
                            {detailsItem.lastname}
                          </Typography>
                        </div>
                        <div className="wrapper">
                          <h6 className="boxTitles">RANK</h6>
                          <h6 className="boxTitles">POINTS</h6>
                          <h6 className="boxTitles">COUNTRY</h6>
                          <h6 className="boxInfos">{`#${detailsItem.data.rank}`}</h6>
                          <h6 className="boxInfos">
                            {detailsItem.data.points}
                          </h6>
                          <h6 className="boxInfos">
                            {detailsItem.country.code}
                          </h6>
                        </div>
                        <div className="wrapper" style={{ marginTop: "8%" }}>
                          <h6 className="boxTitles">BIRTHDAY</h6>
                          <h6 className="boxTitles">AGE</h6>
                          <div className="boxTitles" />
                          <h6 className="boxInfos">
                            {dateOfBirth.getFullYear() -
                              `${detailsItem.data.age}`}
                          </h6>
                          <h6 className="boxInfos">{detailsItem.data.age}</h6>
                          <div className="boxTitles" />
                        </div>
                        <div className="wrapper" style={{ marginTop: "8%" }}>
                          <h6 className="boxTitles">WEIGHT</h6>
                          <h6 className="boxTitles">HEIGHT</h6>
                          <div className="boxTitles" />
                          <h6 className="boxInfos">
                            {`${detailsItem.data.weight}` / 1000}
                          </h6>
                          <h6 className="boxInfos">
                            {detailsItem.data.height} cm
                          </h6>
                          <div className="boxTitles" />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs>
                      <div style={{ marginLeft: "20%" }}>
                        <img
                          src={detailsItem.country.picture}
                          alt=""
                          style={{
                            width: 100,
                            height: 60,
                            boxShadow: `0px 0px 6px 1px rgba(0,0,0,0.2)`,
                          }}
                        />
                        <Typography
                          style={{
                            fontSize: "300%",
                            color: "black",
                            opacity: "30%",
                            marginTop: "-2%",
                          }}
                        >
                          {detailsItem.country.code}
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </Modal>
            ) : null}
          </div>
  )
}
