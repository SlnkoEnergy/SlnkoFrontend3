import { Box, Grid, Sheet, Table, Typography } from "@mui/joy";
import React from "react";
import logo from "../assests/slnko.png";
import "../CSS/file.css";

const CivilWorks1 = () => {
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
          <Box
            sx={{
              width: "100%",
              height: "76vh",
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
                    <td></td>
                    <td></td>
                    <span style={{ fontWeight: "bold" }}>MACHINARY :</span>{" "}
                    Includes Augar, Tractor, JCBs, Hydra, Ajax and other
                    machinaries
                    <td></td>
                    <td>KWp</td>
                    <td>3024</td>
                    <td>3024</td>
                    <td>0.80</td>
                    <td>INR/Wp</td>
                    <td>226800</td>
                    <td>18%</td>
                    <td>40824</td>
                    <td>267624</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <span style={{ fontWeight: "bold" }}>
                        CIVIL MATERIAL:
                      </span>{" "}
                      Cement, Aggregates, Bricks, Sand & Iron Bars
                    </td>
                    <td></td>
                    <td>KWp</td>
                    <td>3024</td>
                    <td>3024</td>
                    <td>0.30</td>
                    <td>INR/Wp</td>
                    <td>907200</td>
                    <td>18%</td>
                    <td>163296</td>
                    <td>1070496</td>
                  </tr>

                  <tr>
                    <td>25.</td>
                    <td>Transportaion</td>
                    <td>Transformer, LT/HT, Cables, BOS</td>
                    <td>
                    </td>
                    <td>Vehicles</td>
                    <td>14</td>
                    <td>14</td>
                    <td>60000</td>
                    <td>INR/Vehicle</td>
                    <td>840000</td>
                    <td>18%</td>
                    <td>151200</td>
                    <td>991200</td>
                  </tr>

                  <tr>
                    <td>26.</td>
                    <td>Transmission Line</td>
                    <td>11 kV Transmission Line with appropriate conductor size and PCC Poles</td>
                    <td>
                    </td>
                    <td>Km</td>
                    <td>0</td>
                    <td>0</td>
                    <td>450000</td>
                    <td>INR/Km</td>
                    <td>0</td>
                    <td>18%</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>

                  <tr>
                    <td>27.</td>
                    <td>CT PT</td>
                    <td>As per DISCOM requirements</td>
                    <td>
                      
                    </td>
                    <td>Set</td>
                    <td>2</td>
                    <td>2</td>
                    <td>55000</td>
                    <td>INR/Set</td>
                    <td>110000</td>
                    <td>18%</td>
                    <td>19800</td>
                    <td>129800</td>
                  </tr>

                  <tr>
                    <td>28.</td>
                    <td>ABT Meter</td>
                    <td>As per DISCOM requirements</td>
                    <td>
                      
                    </td>
                    <td>Set</td>
                    <td>3</td>
                    <td>3</td>
                    <td>95000</td>
                    <td>INR/Set</td>
                    <td>285000</td>
                    <td>18%</td>
                    <td>51300</td>
                    <td>336300</td>
                  </tr>

                  <tr>
                    <td>29.</td>
                    <td>VCB Kiosk</td>
                    <td>As per DISCOM requirements</td>
                    <td>
                      
                    </td>
                    <td>Set</td>
                    <td>1</td>
                    <td>1</td>
                    <td>320000</td>
                    <td>INR/Set</td>
                    <td>320000</td>
                    <td>18%</td>
                    <td>57600</td>
                    <td>377600</td>
                  </tr>

                  <tr>
                    <td>30.</td>
                    <td>RMS at Substation side</td>
                    <td>As per DISCOM requirements</td>
                    <td>
                      
                    </td>
                    <td>Set</td>
                    <td>1</td>
                    <td>1</td>
                    <td>125000</td>
                    <td>INR/Set</td>
                    <td>125000</td>
                    <td>18%</td>
                    <td>22500</td>
                    <td>147500</td>
                  </tr>

                  <tr>
                    <td>31.</td>
                    <td>Plant Insurance</td>
                    <td>Transit & EAR</td>
                    <td>
                      
                    </td>
                    <td>KWp</td>
                    <td>3024</td>
                    <td>3024</td>
                    <td>75474</td>
                    <td>INR</td>
                    <td>75474</td>
                    <td>18%</td>
                    <td>13585</td>
                    <td>89059</td>
                  </tr>

                  
                </tbody>
              </Table>
            </Sheet>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CivilWorks1;
