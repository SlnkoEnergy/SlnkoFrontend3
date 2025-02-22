import { Box, Grid, Sheet, Table, Typography } from "@mui/joy";
import React from "react";
import logo from "../assests/slnko.png";
import "../CSS/file.css";

const Page6 = () => {
  return (
    <>
      <Box
              sx={{
                position: "absolute", // Changed from "fixed"
                left: {
                  xs: "63.5%",
                  sm: "58.8%",
                  md: "64.5%",
                  lg: "59.59%",
                  xl: "59.59%",
                },
                backgroundColor: "#F2F4F5",
                height: { xs: "1335px", sm: "1165px", md: "1190px", lg: "1230px", xl: "1183px" },
                width: { xs: "30%", sm: "30%", md: "20%", lg: "20%", xl: "20%" },
                zIndex: -1,
                "@media print": {
                  height: "297mm !important",
                  left: "67.59%",
                  width: "40%",
                },
              }}
            ></Box>

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
            width: { xs: "90%", sm: "80%", md: "70%", lg: "60%", xl: "60%" },
            height: "100%",
            border: "2px solid blue",
            padding: "20px",
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
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{
                width: { xs: "150px", sm: "200px", md: "250px", lg: "300px" },
                height: "auto",
              }}
            />

            <Box
              sx={{
                width: {
                  xs: "60%",
                  sm: "50%",
                  md: "50%",
                  lg: "50%",
                  xl: "60%",
                },
                borderBottom: "3px solid #0f4C7f",
                margin: {
                  xs: "10px auto",
                  sm: "20px auto",
                  md: "26px auto",
                  lg: "30px auto",
                  xl: "30px auto",
                },
                "@media print": {
                  width: "55%",
                  margin: "22px auto",
                  borderBottom: "2px solid #0f4C7f",
                },
              }}
            ></Box>
          </Box>

          <br />

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              textColor={"#56A4DA"}
              fontSize={{
                xs: "1.5rem",
                sm: "2rem",
                md: "2.5rem",
                lg: "3rem",
                xl: "3.5rem",
              }}
              fontWeight={"bolder"}
              sx={{
                textDecoration: "underline 3px rgb(243, 182, 39)",
                textUnderlineOffset: "8px",
                "@media print": {
                  fontSize: "1.5rem",
                },
              }}
            >
              SCOPE OF <span style={{ color: "black" }}>SERVICES</span>{" "}
            </Typography>
          </Box>

          <br />

          <Box
            sx={{
              paddingLeft: "40px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                fontSize={{
                  xs: "0.9rem",
                  sm: "1rem",
                  md: "1.1rem",
                  lg: "1.2rem",
                  xl: "1.4rem",
                }}
                fontFamily={"serif"}
                fontWeight={500}
                sx={{
                  "@media print": {
                    fontSize: "1.1rem",
                  },
                }}
              >
                SLnko will be providing following services to
                <span style={{ fontWeight: "bold" }}> Mr. xyz singh</span> ,
                here after referred as “Client”. Detailed technical documents
                list defined further. (refer “Design & Documents List”)
              </Typography>
            </Box>

            <br />

            <Box>
              <Typography
                fontSize={{
                  xs: "0.9rem",
                  sm: "1rem",
                  md: "1.1rem",
                  lg: "1.2rem",
                  xl: "1.4rem",
                }}
                fontFamily={"sans-serif"}
                fontWeight={"400"}
                sx={{
                  "@media print": {
                    fontSize: "1.1rem",
                  },
                }}
              >
                1.Engineering:
              </Typography>
              <Box
                sx={{
                  marginLeft: "30px",
                }}
              >
                <Typography
                  fontSize={{
                    xs: "0.9rem",
                    sm: "1rem",
                    md: "1.1rem",
                    lg: "1.2rem",
                    xl: "1.4rem",
                  }}
                  fontWeight={"500"}
                  fontFamily={"serif"}
                  sx={{
                    "@media print": {
                      fontSize: "1rem",
                    },
                  }}
                >
                  a) Detailed engineering of the solar power plant. (refer
                  “Design & Documents List”)
                </Typography>
                <Typography
                  fontSize={{
                    xs: "0.9rem",
                    sm: "1rem",
                    md: "1.1rem",
                    lg: "1.2rem",
                    xl: "1.4rem",
                  }}
                  fontWeight={"500"}
                  fontFamily={"serif"}
                  sx={{
                    "@media print": {
                      fontSize: "1rem",
                    },
                  }}
                >
                  b) Chartered Engineer approval of design and drawings (if
                  required)
                </Typography>
              </Box>
            </Box>
          </Box>

          <br />

          <Box>
            <Typography
              fontFamily={"sans-serif"}
              fontWeight={"500"}
              fontSize={{
                xs: "1.2rem",
                sm: "1.3rem",
                md: "1.4rem",
                lg: "1.5rem",
                xl: "1.7rem",
              }}
              sx={{
                "@media print": {
                  fontSize: "1rem",
                },
              }}
            >
              Engineering Detailed:
            </Typography>
          </Box>

          <Sheet
            sx={{
              width: "100%",
              backgroundColor: "white",
            }}
          >
            <Table className="table-header1">
              <thead>
                <tr>
                  <th style={{ width: "8%" }}>S.NO.</th>
                  <th>Technical Services in the scope of SLNKO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    Detailed Technical Site Survey as per Engineering
                    Requirements
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>DPR (Detailed project report) Preparation</td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>
                    Preparation of Engineering designs and drawings as tabulated
                    below
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>
                    Optimization of complete Bill of Material in quantity
                    through our engineering expertise
                  </td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>
                    Reviewing all the equipment GTPs & drawing submitted by
                    vendors and check their applicability as per applicable
                    standards.
                  </td>
                </tr>

                <tr>
                  <td>6</td>
                  <td>
                    All the Design and Drawings needed by authority for approval
                    shall be provided by Slnko
                  </td>
                </tr>

                <tr>
                  <td>7</td>
                  <td>
                    All required Chartered Engineer approvals covered under
                    scope of Slnko Energy
                  </td>
                </tr>
              </tbody>
            </Table>
          </Sheet>
          <br />
          <Sheet
            sx={{
              width: "100%",
              backgroundColor: "white",
            }}
          >
            <Table className="table-header1">
              <thead>
                <tr>
                  <th style={{ width: "8%" }}>S.NO.</th>
                  <th>Technical Services in the scope of SLNKO</th>
                  <th style={{ width: "18%" }}>Submission</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    Detailed Module Array Layout (from construction perspective)
                  </td>
                  <td>Phase-01</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Detailed Electrical Single Linc Diagram (SLD)</td>
                  <td>Phase-01</td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>
                    Detailed Bill of Material (BOM) (from RFQ and ordering
                    perspective)
                  </td>
                  <td>Phase-01</td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>
                    Module Mounting Structure Design Calculation & STAAD Report
                  </td>
                  <td>Phase-01</td>
                </tr>
              </tbody>
            </Table>
          </Sheet>
        </Grid>
      </Grid>
    </>
  );
};

export default Page6;
