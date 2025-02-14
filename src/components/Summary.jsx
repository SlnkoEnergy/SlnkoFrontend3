import { Box, Grid, Table, Typography } from "@mui/joy";
import React from "react";
import logo from "../assests/slnko.png";
import "../CSS/file.css";

const Summary = () => {
  return (
    <>
      <Grid
        sx={{
          width: "100%",
          height: "100%",
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
            width: "60%",
            height: "100%",
            border: "2px solid blue",
            "@media print": {
              width: "210mm",
              height: "297mm",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "flex-end",
              gap: 2,
              paddingTop: "20px",
              "@media print": {
                padding: "5px",
                marginTop: "10px",
              },
            }}
          >
            <img
              width={"350px"}
              height={"200px"}
              className="logo-img2"
              alt="logo"
              src={logo}
            />

            <hr
              style={{
                width: "50%",
                borderTop: "3px solid #0f4C7f", // Keeps the line visible
                margin: "40px 0",
                boxShadow: "none !important", // Force removal of any shadow
                background: "transparent !important", // Ensure no background color
                border: "none !important", // Ensure no border shadow
                // Remove any outline if applied
              }}
              className="hr-line3"
            />
          </Box>

          <Box>
            <Table className="table-header-Summary">
              <thead>
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
                  <td style={{ backgroundColor: "#f6e899" }}>
                    1. Total Plant Cost{" "}
                  </td>
                  <td style={{ backgroundColor: "#f6e899" }}></td>
                  <td style={{ backgroundColor: "#f6e899" }}></td>
                  <td style={{ backgroundColor: "#f6e899" }}></td>
                </tr>

                <tr>
                  <td
                    colSpan={4}
                    style={{
                      fontWeight: "bold",
                      fontFamily: "sans-serif",
                      fontSize: "1.2rem",
                      backgroundColor:'#dad9d9'
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
                  <td style={{ backgroundColor: "#f6e899" }}>2. Total GSS Equipment Cost</td>
                  <td style={{ backgroundColor: "#f6e899" }}></td>
                  <td style={{ backgroundColor: "#f6e899" }}></td>
                  <td style={{ backgroundColor: "#f6e899" }}></td>
                </tr>

                <tr>
                  <td
                    style={{
                      fontWeight: "bold",
                      fontFamily: "sans-serif",
                      fontSize: "1rem",
                      backgroundColor: "#ead34d"
                      
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
                      backgroundColor:'#dad9d9'
                    }}
                  >
                    Cost without Module
                  </td>
                  <td style={{backgroundColor:'#dad9d9'}}></td>
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
