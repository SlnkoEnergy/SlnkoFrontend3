import { Box, Grid, Typography } from "@mui/joy";
import React from "react";
import logo from "../assests/slnko.png";
import "../CSS/file.css";

const Page6 = () => {
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
            width: "60%",
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
            <img width={"300px"} height={"180px"} alt="logo" src={logo} />

            <hr
              style={{
                width: "50%",
                color: "blue",
                borderTop: "3px solid #0f4C7f",
                margin: "40px 0",
              }}
            />
          </Box>

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
              textColor={"#56A4DA"}
              fontSize={"3rem"}
              fontWeight={"bolder"}
              sx={{
                textDecoration: "underline 3px rgb(243, 182, 39)",
                textUnderlineOffset: "8px",
              }}
            >
              SCOPE OF <span style={{ color: "black" }}>SERVICES</span>{" "}
            </Typography>
          </Box>

          <br />
          <br />
          <br />

          <Box
          sx={{
            width:'90%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}
          >
            <Typography
              fontSize={"1.4rem"}
              fontFamily={"serif"}
              fontWeight={500}
              paddingLeft={'60px'}
            >
              SLnko will be providing following services to<span style={{fontWeight:'bold'}}> Mr. xyz singh</span>  , here
              after referred as “Client”. Detailed technical documents list
              defined further. (refer “Design & Documents List”)
            </Typography>
          </Box>

          <br />
          <br />
        </Grid>
      </Grid>
    </>
  );
};

export default Page6;
