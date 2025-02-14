import { Box, Grid, Table, Typography } from "@mui/joy";
import React from "react";
import logo from "../assests/slnko.png";
import "../CSS/file.css";

const Summary = () => {
  return (
    <>
      <Grid
        container
        sx={{
          width: "100%",
          height:'100%',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "@media print": {
            width: "210mm",
            height: "297mm",
            overflow: "hidden",
            margin: "0",
            padding: "0",
            pageBreakInside: "avoid",
          },
        }}
      >
        <Grid
          sx={{
            width: "50%",
            minHeight:'120vh',
            border: "2px solid blue",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            "@media (max-width: 1340px)": {
              width: "75%",
            },
            "@media print": {
              width: "210mm !important",
              height: "297mm !important",
              minHeight:'0vh !important'
            },
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
            <img
              width={"220px"}
              height={"110px"}
              alt="logo"
              src={logo}
              style={{ maxWidth: "100%" }}
            />
            <Box
              sx={{
                width: "60%",
                margin: "18px 0",
                "@media (max-width: 1340px)": {
                  width: "50%",
                },
              }}
            >
              <hr
                style={{
                  width: "100%",
                  color: "blue",
                  borderTop: "3px solid #0f4C7f",
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              width: "90%",
              height: "80%",
              
            }}
          >
            <Table className="table-header-Summary">
              <thead>
                <tr>
                  <th
                    colSpan={4}
                    style={{
                      fontWeight: "bold",
                      fontFamily: "serif",
                      fontSize: "1.2rem",
                      textAlign: "center",
                      backgroundColor: "#B4C7E7",
                    }}
                  ></th>
                </tr>

                <tr>
                  <th
                    colSpan={4}
                    style={{
                      fontWeight: "bold",
                      fontFamily: "serif",
                      
                      textAlign: "center",
                      backgroundColor: "#D9D9D9",
                    }}
                  >
                    PLANT COSTING SUMMARY ONLY
                  </th>
                </tr>

                <tr>
                  <th
                    style={{
                      fontWeight: "bold",
                      fontFamily: "serif",
                      fontSize: "1.2rem",
                      textAlign: "center",
                    }}
                  >
                    Capacity (kWp DC)
                  </th>
                </tr>

                <th style={{ width: "40%" }}>Items</th>
                <th>Basic Value</th>
                <th>GST Value</th>
                <th>Total With GST Value</th>
              </thead>

              <tbody>
                <tr>
                  <td>Solar Module</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td>Solar Inverter & Datalogger</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td>MMS With Fasteners</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td>Cables</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td>
                    Electrical Equipment - Solar Plant Side (Transformer+LT
                    Panel+HT Panel+Aux Transformer+UPS System)
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td>Other Balance of Material</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td>
                    Installation Charges inside boundary wall (Labour, Machinary
                    & Civil Material)
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td>Transportation & Insurance</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>SLnko Service Charges</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td
                    style={{ backgroundColor: "#FFF2CC", fontWeight: "bold" }}
                  >
                    1. Total Plant Cost
                  </td>
                  <td style={{ backgroundColor: "#FFF2CC" }}></td>
                  <td style={{ backgroundColor: "#FFF2CC" }}></td>
                  <td style={{ backgroundColor: "#FFF2CC" }}></td>
                </tr>

                <tr>
                  <td
                    colSpan={4}
                    style={{
                      fontWeight: "bold",
                      fontFamily: "sans-serif",
                      fontSize: "1rem",
                      backgroundColor: "#D9D9D9",
                    }}
                  >
                    GSS ITEMS COSTING SUMMARY
                  </td>
                </tr>

                <tr>
                  <td>GSS Equipments</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td>Transmission Line</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td
                    style={{ backgroundColor: "#FFF2CC", fontWeight: "bold" }}
                  >
                    2. Total GSS Equipment Cost
                  </td>
                  <td style={{ backgroundColor: "#FFF2CC" }}></td>
                  <td style={{ backgroundColor: "#FFF2CC" }}></td>
                  <td style={{ backgroundColor: "#FFF2CC" }}></td>
                </tr>

                <tr>
                  <td
                    style={{
                      fontWeight: "bold",
                      fontFamily: "sans-serif",
                      fontSize: "0.8rem",
                      backgroundColor: "#ead34d",
                    }}
                  >
                    TOTAL PLANT COST (1+2)
                  </td>
                  <td style={{ backgroundColor: "#ead34d" }}></td>
                  <td style={{ backgroundColor: "#ead34d" }}></td>
                  <td style={{ backgroundColor: "#ead34d" }}></td>
                </tr>

                <tr>
                  <td
                    style={{
                      fontWeight: "bold",
                      fontFamily: "sans-serif",
                      fontSize: "1rem",
                      backgroundColor: "#D9D9D9",
                    }}
                  >
                    Cost without Module
                  </td>
                  <td style={{ backgroundColor: "#D9D9D9" }}></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td>Total Cost (INR/Wp DC)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td>Cost without Module (INR/Wp DC)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Summary;
