import { Box, Grid, Typography } from "@mui/joy";
import React from "react";
import logo from "../assests/Img.png";
import Logo from "../assests/white_logo.png";
import img1 from "../assests/ImgP03_02.png";
const Page3 = () => {
  return (
    <>
      <Grid
        sx={{
          width: "100%",
          height: "130vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{
            width: "60%",
            height: "100%",
            border: "2px solid black",
          }}
        >
          {/* Top */}
          <Box
            sx={{
              width: "100%",
              height: "40%",
              backgroundColor: "#0f4C7f",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Top Left*/}
            <Box
              sx={{
                width: "35%",
                height: "90%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "80%", height: "100%", borderRadius: "5px" }}
                alt="img"
                src={logo}
              />
            </Box>
            {/* Top Right*/}
            <Box
              sx={{
                width: "65%",
                height: "90%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
              }}
            >
              <img
                width={"290px"}
                height={"110px"}
                style={{ objectFit: "cover" }}
                alt="logo"
                src={Logo}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <Typography
                  fontSize={"5rem"}
                  fontWeight={"bolder"}
                  textColor={"black"}
                >
                  WHY <span style={{ color: "#56A4DA" }}>US?</span>
                </Typography>
                <Typography
                  textColor={"#56A4DA"}
                  fontSize={"x-large"}
                  fontWeight={"bold"}
                  fontFamily={"serif"}
                >
                  We add incredible value to a project through our holistic and
                  systemetic approach. We ensure that the project is optimized
                  for design along with other aspects such as execution,
                  durability, and operations thereby creating higher value for
                  money.
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* Down */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              gap: 8,
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 10,
                justifyContent: "center",
                height: "33.33%",
              }}
            >
              <Box
                sx={{
                  width: "33.33%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Typography
                  fontSize={"2rem"}
                  fontFamily={"serif"}
                  maxWidth={"33.33%"}
                >
                  Detailed Engineering
                </Typography>
              </Box>

              <Box
                sx={{
                  backgroundColor: "#F0EFEF",
                  borderRadius: "100em 0em 0em 100em",
                  width: "67.777%",
                }}
              >
                <img
                  style={{
                    filter: " drop-shadow(0 0 0.50rem black)",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                  width={"150px"}
                  alt="img"
                  src={img1}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 10,
                justifyContent: "center",
                height: "33.33%",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#F0EFEF",
                  borderRadius: "0em 100em 100em 0em",
                  width: "67.777%",
                }}
              >
                <img
                  style={{
                    filter: " drop-shadow(0 0 0.50rem black)",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                  width={"150px"}
                  alt="img"
                  src={img1}
                />
              </Box>
              <Box
                sx={{
                  width: "33.33%",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Typography
                  fontSize={"2rem"}
                  fontFamily={"serif"}
                  maxWidth={"33.33%"}
                >
                  Vendor Management
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 10,
                justifyContent: "center",
                height: "33.33%",
              }}
            >
              <Box
                sx={{
                  width: "33.33%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Typography
                  fontSize={"2rem"}
                  fontFamily={"serif"}
                  maxWidth={"33.33%"}
                >
                  Site Management
                </Typography>
              </Box>

              <Box
                sx={{
                  backgroundColor: "#F0EFEF",
                  borderRadius: "100em 0em 0em 100em",
                  width: "67.777%",
                }}
              >
                <img
                  style={{
                    filter: " drop-shadow(0 0 0.50rem black)",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                  width={"150px"}
                  alt="img"
                  src={img1}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Page3;
//
