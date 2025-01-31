import { Box, Grid, Sheet, Table, Typography } from "@mui/joy";
import React from "react";
import logo from "../assests/slnko.png";
import "../CSS/file.css";

const Reference4 = () => {
  return (
    <>
      <Grid
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{
            width: "100%",
            height: "100%",
            border: "2px solid blue",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "flex-end",
              gap: 2,
            }}
          >
            <img width={"220px"} height={"110px"} alt="logo" src={logo} />

            <hr
              style={{
                width: "60%",
                color: "blue",
                borderTop: "3px solid #0f4C7f",
                margin: "19px 0",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#56A4DA",
                fontSize: "3rem",
                fontWeight: "bolder",
                textDecoration: "underline rgb(243, 182, 39)",
                textDecorationThickness: "3px",
                textUnderlineOffset: "6px",
              }}
            >
              Reference&nbsp;{" "}
            </Typography>

            <Typography
              sx={{
                color: "black",
                fontSize: "3rem",
                fontWeight: "bolder",
                textDecoration: "underline rgb(243, 182, 39)",
                textDecorationThickness: "3px",
                textUnderlineOffset: "6px",
              }}
            >
              Material List
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <Sheet
              sx={{
                width: "99.5%",
                height: "100%",
                backgroundColor: "white",
              }}
            >
              <Table className="table-header">
                <thead>
                  <tr>
                    <th style={{ width: "2.5%" }}>S.NO.</th>
                    <th style={{ width: "5.5%" }}>ITEM NAME</th>
                    <th style={{ width: "6%" }}>RATING</th>
                    <th style={{ width: "20%" }}>SPECIFICATION</th>
                    <th>UoM</th>
                    <th>Qty (Int.)</th>
                    <th>Qty</th>
                    <th>Rate</th>
                    <th>Rate UoM</th>
                    <th>Total Value</th>
                    <th>GST</th>
                    <th>GST Value</th>
                    <th>Total with GST</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>23.</td>
                    <td>
                      Balance of system with Wet Module Cleaning System (MCS) &
                      Dry Cleaning semi automatic robot
                    </td>
                    <td>
                      Class C Items including Connectors, Lungs, Glands,
                      Termination Kits, Conduits, Cable Tie, Ferruls, Sleeves,
                      PU Foam, Route Marker, Danger boards and signages, Double
                      Warning Tape, & Fire Fighting System
                    </td>
                    <td></td>
                    <td>KWp</td>
                    <td>3024</td>
                    <td>3024</td>
                    <td>200</td>
                    <td>INR/Set</td>
                    <td>604800</td>
                    <td>18%</td>
                    <td>108864</td>
                    <td>713664</td>
                  </tr>
                </tbody>
              </Table>
            </Sheet>

          </Box>
          <Box
            sx={{
              width: "100%",
              marginTop:'20px',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#56A4DA",
                fontSize: "3rem",
                fontWeight: "bolder",
                textDecoration: "underline rgb(243, 182, 39)",
                textDecorationThickness: "3px",
                textUnderlineOffset: "6px",
              }}
            >
              Civil&nbsp;{" "}
            </Typography>

            <Typography
              sx={{
                color: "black",
                fontSize: "3rem",
                fontWeight: "bolder",
                textDecoration: "underline rgb(243, 182, 39)",
                textDecorationThickness: "3px",
                textUnderlineOffset: "6px",
              }}
            >
              Works
            </Typography>


            
          </Box>
          <Sheet
              sx={{
                width: "99.5%",
                height: "100%",
                backgroundColor: "white",
                marginBottom:'10px'
              }}
            >
              <Table className="table-header">
                <thead>
                  <tr>
                    <th style={{ width: "2.5%" }}>S.NO.</th>
                    <th style={{ width: "5.5%" }}>ITEM NAME</th>
                    <th style={{ width: "6%" }}>RATING</th>
                    <th style={{ width: "20%" }}>SPECIFICATION</th>
                    <th>UoM</th>
                    <th>Qty (Int.)</th>
                    <th>Qty</th>
                    <th>Rate</th>
                    <th>Rate UoM</th>
                    <th>Total Value</th>
                    <th>GST</th>
                    <th>GST Value</th>
                    <th>Total with GST</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>24.</td>
                    <td>
                    Installation and commissioing
                    </td>
                    <td>
                    <span style={{fontWeight:'bold'}}>LABOUR WORKS:</span> Includes Pile casting, Module Mounting & Alignment, and complete AC-DC work till commissioning inside plant boundary
                    </td>
                    <td></td>
                    <td>KWp</td>
                    <td>3024</td>
                    <td>3024</td>
                    <td>0.40</td>
                    <td>INR/Wp</td>
                    <td>1209600</td>
                    <td>18%</td>
                    <td>217728</td>
                    <td>1427328</td>
                  </tr>
                </tbody>
              </Table>
            </Sheet>
        </Grid>
      </Grid>
    </>
  );
};

export default Reference4;
