import { Box, Grid } from "@mui/joy";
import React from "react";
import logo from "../assests/Img.png"
import Logo from "../assests/slnko.png"
const Page3 = () => {
  return (
    <>
      <Grid
        sx={{
          width: "100%",
          height: "140vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{
            width: "70%",
            height: "100%",
            border: "2px solid black",
            
          }}
        >
          {/* Top */}
          <Box
          sx={{
            width:'100%',
            height:'50%',
            backgroundColor:'#0f4C7f',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}
          >
          {/* Top Left*/}
          <Box
          sx={{
            width:'40%',
            height:'90%',
            display:'flex',
            justifyContent:'center',
            
            
          }}
          >
          <img style={{ width:'70%',height:'100%'}}  alt="img"  src={logo} />
          </Box>
        {/* Top Right*/}
          <Box
          sx={{
            width:'60%',
            height:'90%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
          }}
          >
          <img alt="logo" src={Logo} />
          </Box>
          
          </Box>
          {/* Down */}
          <Box></Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Page3;
