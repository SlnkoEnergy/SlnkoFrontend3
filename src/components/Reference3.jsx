import { Box, Grid, Sheet, Table, Typography } from "@mui/joy";
import React from "react";
import logo from "../assests/slnko.png";
import "../CSS/file.css";

const Reference3 = () => {
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
                    <td>15.</td>
                    <td>11 kV ICOG, Outdoor Panel</td>
                    <td>
                      11 kV, 630/800 amp,25 kA for 3 sec With MFM of CL0.2s
                    </td>
                    <td>
                      CT-25 kA For 3 Sec, XXX/5A, CORE-1,10VA,5P20, CORE-2,
                      10VA,CL0.2s
                      <br />
                      PT-XXkV/SQRT3/110/SQRT3/110/SQRT3
                      <br />
                      30VA,30VA,
                      <br />
                      CORE-1,CL-3P
                      <br />
                      CORE-2,CL0.2
                      <br />
                    </td>
                    <td>Nos.</td>
                    <td>1</td>
                    <td>1</td>
                    <td>440000</td>
                    <td>INR/Nos.</td>
                    <td>440000</td>
                    <td>18%</td>
                    <td>79200</td>
                    <td>519200</td>
                  </tr>

                  <tr>
                    <td>16.</td>
                    <td>Earthing Station</td>
                    <td>
                      Maintenance Free Earth Electrode with Chemical Earthing
                      Set{" "}
                    </td>
                    <td>
                      The earthing for array and LT power system shall be made
                      of 3 mtr long , 17.2 mm dia, Copper Bonded , thickness of
                      250 microns, chemical compound filled, double walled
                      earthing electrodes including accessories, and providing
                      masonry enclosure with cast iron cover plate having
                      pad-locking arrangement, watering pipe using charcoal or
                      coke and salt as required as per provisions of IS: 3043
                    </td>
                    <td>Set</td>
                    <td>32</td>
                    <td>32</td>
                    <td>2000</td>
                    <td>INR/Set</td>
                    <td>64000</td>
                    <td>18%</td>
                    <td>11520</td>
                    <td>75520</td>
                  </tr>

                  <tr>
                    <td>17.</td>
                    <td>Earthing Strips</td>
                    <td>25x3 mm GI strip</td>
                    <td>
                      25x3 mm GI strip With Zinc coating of 70 to 80 microns
                    </td>
                    <td>m</td>
                    <td>2419.2</td>
                    <td>2419.2</td>
                    <td>48</td>
                    <td>INR/m</td>
                    <td>116122</td>
                    <td>18%</td>
                    <td>20902</td>
                    <td>137023</td>
                  </tr>

                  <tr>
                    <td>18.</td>
                    <td>Earthing Strips</td>
                    <td>50x6 mm GI strip</td>
                    <td>
                      50x6 mm GI strip With Zinc coating of 70 to 80 microns
                    </td>
                    <td>m</td>
                    <td></td>
                    <td></td>
                    <td>172</td>
                    <td>INR/m</td>
                    <td>0</td>
                    <td>18%</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>

                  <tr>
                    <td>19.</td>
                    <td>Lightening Arrestor</td>
                    <td>107 Mtr Dia over 7 Mtr High Mast with counter</td>
                    <td>
                      ESE type as per NFC 17-102, ESE are considered with 107
                      Mtr Dia over 7 Mtr High Mast with counter
                    </td>
                    <td>Set</td>
                    <td>3</td>
                    <td>3</td>
                    <td>30000</td>
                    <td>INR/Set</td>
                    <td>90000</td>
                    <td>18%</td>
                    <td>16200</td>
                    <td>106200</td>
                  </tr>

                  <tr>
                    <td>20.</td>
                    <td>Datalogger</td>
                    <td>As per inverter manufacturer</td>
                    <td>As per inverter manufacturer</td>
                    <td>Set</td>
                    <td>1</td>
                    <td>1</td>
                    <td>35000</td>
                    <td></td>
                    <td>35000</td>
                    <td>18%</td>
                    <td>6300</td>
                    <td>41300</td>
                  </tr>

                  <tr>
                    <td>21.</td>
                    <td>Auxilary transformer</td>
                    <td>10 kVA,50Hz, 800/415 V, Dyn11</td>
                    <td>Dry Type Transformer</td>
                    <td>Nos.</td>
                    <td>1</td>
                    <td>1</td>
                    <td>65000</td>
                    <td>INR/Nos.</td>
                    <td>65000</td>
                    <td>18%</td>
                    <td>11700</td>
                    <td>76700</td>
                  </tr>

                  <tr>
                    <td>22.</td>
                    <td>UPS & LDB</td>
                    <td>1.5 kW Load with 1 Hour backup, Battery SMF Type</td>
                    <td></td>
                    <td>Set</td>
                    <td>1</td>
                    <td>1</td>
                    <td>100000</td>
                    <td>INR/Set</td>
                    <td>100000</td>
                    <td>18%</td>
                    <td>18000</td>
                    <td>118000</td>
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

export default Reference3;
