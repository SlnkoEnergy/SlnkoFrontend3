import { Box, Grid, Typography } from "@mui/joy";
import React from "react";
import logo from "../assests/slnko.png";
import "../CSS/file.css";

const Page5 = () => {
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
                height: { xs: "1335px", sm: "1165px", md: "1190px", lg: "1183px", xl: "1183px" },
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
                "@media print": {
                  width: "300px",
                  height: "180px",
                },
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
                  margin: "36px auto",
                },
              }}
            ></Box>
          </Box>
          <br />
          <br />
          <br />
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
              sx={{
                textDecoration: "underline 3px rgb(243, 182, 39)",
                textUnderlineOffset: "8px",
                "@media print": {
                  fontSize: "2rem",
                },
              }}
              textColor={"#56A4DA"}
              fontWeight={"bold"}
              fontSize={{
                xs: "1.2rem",
                sm: "1.5rem",
                md: "1.9rem",
                lg: "2.3rem",
                xl: "2.5rem",
              }}
              fontFamily={"sans-serif"}
            >
              COMMERCIAL OFFER <span style={{ color: "black" }}>FOR KUSUM</span>{" "}
            </Typography>
          </Box>
          <br />
          <br />
          <br />
          <Box
            sx={{
              width: "90%",
              paddingLeft: "40px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography
                fontSize={{
                  xs: "1.2rem",
                  sm: "1.3rem",
                  md: "1.5rem",
                  lg: "1.6rem",
                  xl: "1.8rem",
                }}
                fontFamily={"serif"}
                fontWeight={"400"}
                sx={{
                  "@media print": {
                    fontSize: "1.5rem",
                  },
                }}
              >
                To
              </Typography>
            </Box>
            <Box>
              <Typography
                fontSize={{
                  xs: "1.2rem",
                  sm: "1.3rem",
                  md: "1.5rem",
                  lg: "1.6rem",
                  xl: "1.8rem",
                }}
                fontFamily={"serif"}
                fontWeight={"400"}
                sx={{
                  "@media print": {
                    fontSize: "1.5rem",
                  },
                }}
              >
                Mr. xyz singh
              </Typography>
            </Box>
            <Box>
              <Typography
                fontSize={{
                  xs: "1.2rem",
                  sm: "1.3rem",
                  md: "1.5rem",
                  lg: "1.6rem",
                  xl: "1.8rem",
                }}
                fontFamily={"serif"}
                fontWeight={"400"}
                sx={{
                  "@media print": {
                    fontSize: "1.5rem",
                  },
                }}
              >
                bfbdhbvhfvb, akfnkdsjnfsji, Lakshadweep - 0258
              </Typography>
            </Box>
            <br />
            <br />
            <Box>
              <Typography
                fontSize={{
                  xs: "1.2rem",
                  sm: "1.3rem",
                  md: "1.5rem",
                  lg: "1.6rem",
                  xl: "1.8rem",
                }}
                fontFamily={"serif"}
                fontWeight={"400"}
                sx={{
                  "@media print": {
                    fontSize: "1.5rem",
                  },
                }}
              >
                <span style={{ fontWeight: "bold" }}>Subject:</span> EPCM
                Services for 3 MW AC / 5 MW DC Ground Mount kusum Solar Project
                Component A
              </Typography>
            </Box>
            <br />
            <br />
            <Box>
              <Typography
                fontSize={{
                  xs: "1.2rem",
                  sm: "1.3rem",
                  md: "1.5rem",
                  lg: "1.6rem",
                  xl: "1.8rem",
                }}
                fontFamily={"serif"}
                fontWeight={"400"}
                sx={{
                  "@media print": {
                    fontSize: "1.5rem",
                  },
                }}
              >
                We are pleased to submit our commercial offer for the
                above-mentioned subject. We are submitting our most reasonable
                commercial offer for your consideration based on your
                requirements. We believe our quality-to-price ratio will meet
                your expectations.
              </Typography>
            </Box>
            <br />
            <br />
            <Box>
              <Typography
                fontSize={{
                  xs: "1.2rem",
                  sm: "1.3rem",
                  md: "1.5rem",
                  lg: "1.6rem",
                  xl: "1.8rem",
                }}
                fontFamily={"serif"}
                fontWeight={"400"}
                sx={{
                  "@media print": {
                    fontSize: "1.5rem",
                  },
                }}
              >
                We are looking forward to having a long and fruitful association
                with your esteemed organization through this project.
              </Typography>
            </Box>
            <br />
            <br />

            <Box>
              <Typography
                fontSize={{
                  xs: "1.2rem",
                  sm: "1.3rem",
                  md: "1.5rem",
                  lg: "1.6rem",
                  xl: "1.8rem",
                }}
                fontFamily={"serif"}
                fontWeight={"400"}
                sx={{
                  "@media print": {
                    fontSize: "1.5rem",
                  },
                }}
              >
                Thanking you! <br /> IT TEAM
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                marginTop: "24%",
                "@media print": {
                  marginTop: "18%",
                },
              }}
            >
              <hr
                style={{
                  width: "80%",
                  color: "blue",
                  borderTop: "2px solid goldenrod",
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Page5;
